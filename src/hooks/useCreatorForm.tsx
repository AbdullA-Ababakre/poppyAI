import { embedCreatorProfile } from "@/utils";
import { supabaseClient } from "@/utils/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";
import { SyntheticEvent, useState } from "react";
import { toString } from "lodash";
import { useRouter } from "next/router";

export const useCreatorForm = ({ redirectPath }: { redirectPath?: string }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [xHandle, setXHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [tiktokHandle, setTiktokHandle] = useState("");
  const [countryAddress, setCountryAddress] = useState("");
  const [gender, setGender] = useState("");
  const [areaOfSpecialty, setAreaOfSpecialty] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [tiktokFollowers, setTiktokFollowers] = useState("");
  const [instagramFollowers, setInstagramFollowers] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    if (!file) {
      console.error("profile image file not found");
      return;
    }

    try {
      const fileExtension = file.name.split(".").pop();
      const filePath = `uploads/${Math.random()
        .toString(36)
        .substring(2, 15)}.${fileExtension}`;

      // Upload the file
      const uploadResponse = await supabaseClient.storage
        .from("creatorsImage")
        .upload(filePath, file);
      if (uploadResponse.error) {
        throw new Error(uploadResponse.error.message);
      }

      //Get ProfileImage url
      const { data: publicUrlData } = await supabaseClient.storage
        .from("creatorsImage")
        .getPublicUrl(filePath);

      //Generate profile prompt
      const creatorProfile = `Meet ${fullName}, a UGC creator with a vibrant presence across multiple platforms. Here's a quick glance at their profile:
        - **Email:** ${email}
        - **Website:** ${website}
        - **Social Influence:** ${tiktokFollowers} TikTok followers; ${instagramFollowers} Instagram followers
        - **Location:** ${countryAddress}
        - **Gender:** ${gender}
        - **About:** ${selfDescription}
        - **Industry Focus:** ${areaOfSpecialty}
        - **Languages Spoken:** ${languages}
        ${fullName}'s content spans across ${areaOfSpecialty}, and speaks ${languages}.`;

      //Generate profile embedding
      const embeddings = await embedCreatorProfile(creatorProfile);

      const insertResponse = await supabaseClient.from("creators").insert({
        name: fullName,
        email,
        website,
        avatar: publicUrlData.publicUrl,
        twitter_link: xHandle,
        instagram: instagramHandle,
        tiktok: tiktokHandle,
        instagram_followers: instagramFollowers,
        tiktok_followers: tiktokFollowers,
        location: countryAddress,
        language: languages,
        gender: gender,
        industry: areaOfSpecialty,
        description: selfDescription,
        embeddings,
      });

      if (insertResponse.error) {
        throw new Error(insertResponse.error.message);
      }

      //When submit is success
      onSubmitSuccess();
    } catch (error: any) {
      console.error("Form submission error:", error);
      handleJoinFormSubmitError(error);
    }
  };

  function onSubmitSuccess() {
    setSubmitError(null);
    setSubmitSuccess(`Form has been submitted successfully for ${fullName}!`);
    clearForm();
    redirectPath && router.push(redirectPath);
  }

  function handleJoinFormSubmitError(
    error: PostgrestError | Error | null
  ): void {
    //just save the error for now
    setSubmitError("Form Submit Error: " + toString(error));
  }

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // Add a new function to clear the form
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setWebsite("");
    setFile(null);
    setXHandle("");
    setInstagramHandle("");
    setTiktokHandle("");
    setCountryAddress("");
    setGender("");
    setAreaOfSpecialty("");
    setSelfDescription("");
    setLanguages("");
    setTiktokFollowers("");
    setInstagramFollowers("");
  };

  return {
    submitSuccess,
    setSubmitSuccess,
    submitError,
    setSubmitError,
    fullName,
    setFullName,
    email,
    setEmail,
    website,
    setWebsite,
    file,
    setFile,
    xHandle,
    setXHandle,
    instagramHandle,
    setInstagramHandle,
    tiktokHandle,
    setTiktokHandle,
    countryAddress,
    setCountryAddress,
    gender,
    setGender,
    areaOfSpecialty,
    setAreaOfSpecialty,
    selfDescription,
    setSelfDescription,
    languages,
    setLanguages,
    tiktokFollowers,
    setTiktokFollowers,
    instagramFollowers,
    setInstagramFollowers,
    handleSubmit,
    handleProfilePictureChange,
  };
};
