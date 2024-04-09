import React from "react";
import "./index.scss";
import CustomButton from "../Button";
import { useCreatorForm } from "@/src/hooks/useCreatorForm";
import AlertBanner from "../AlertBanner";

const CreatorJoinForm: React.FC<{ redirect?: string }> = ({ redirect }) => {
  const form = useCreatorForm({ redirectPath: redirect });

  return (
    <>
      {/* Banners */}
      <AlertBanner message={form.submitError} messageType={"error"} />
      <AlertBanner message={form.submitSuccess} messageType={"success"} />

      {/* Form */}
      <form onSubmit={form.handleSubmit} className="creatorJoinForm">
        <h2>Add Your Information</h2>
        <label>
          Full Name
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => form.setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => form.setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Portfolio Link
          <input
            type="url"
            value={form.website}
            onChange={(e) => form.setWebsite(e.target.value)}
            required
          />
        </label>
        <label>
          Profile Picture
          <input
            type="file"
            onChange={form.handleProfilePictureChange}
            required
          />
        </label>
        <label>
          X handle
          <input
            type="text"
            value={form.xHandle}
            onChange={(e) => form.setXHandle(e.target.value)}
            required
          />
        </label>
        <label>
          Instagram handle
          <input
            type="text"
            value={form.instagramHandle}
            onChange={(e) => form.setInstagramHandle(e.target.value)}
            required
          />
        </label>
        <label>
          TikTok handle
          <input
            type="text"
            value={form.tiktokHandle}
            onChange={(e) => form.setTiktokHandle(e.target.value)}
            required
          />
        </label>
        <label>
          TikTok followers Number
          <input
            type="text"
            value={form.tiktokFollowers}
            onChange={(e) => form.setTiktokFollowers(e.target.value)}
            required
          />
        </label>
        <label>
          Instagram followers Number
          <input
            type="text"
            value={form.instagramFollowers}
            onChange={(e) => form.setInstagramFollowers(e.target.value)}
            required
          />
        </label>
        <label>
          Based Country
          <input
            type="text"
            value={form.countryAddress}
            onChange={(e) => form.setCountryAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Languages
          <input
            type="text"
            value={form.languages}
            onChange={(e) => form.setLanguages(e.target.value)}
            required
          />
        </label>
        <label>
          Gender
          <select
            value={form.gender}
            onChange={(e) => form.setGender(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
        <label>
          Area of Specialty
          <input
            type="text"
            value={form.areaOfSpecialty}
            onChange={(e) => form.setAreaOfSpecialty(e.target.value)}
            required
          />
        </label>
        <label>
          Self Description
          <textarea
            value={form.selfDescription}
            onChange={(e) => form.setSelfDescription(e.target.value)}
            minLength={20}
          />
        </label>
        <CustomButton
          text="submit"
          onClick={() => {
            form.handleSubmit;
          }}
        />
      </form>
    </>
  );
};

export default CreatorJoinForm;
