import React from "react";
import Image from "next/image";
import man from "../../assets/man.png";
import "./index.scss";
import { isBlankStr } from "@/utils";
import CustomButton from "../Button";

type CreatorCardType = {
  profileImage?: string;
  name: string;
  email?: string;
  onlineProfile?: string;
  twitter?: string;
  tiktok?: string;
  instagram?: string;
  tags?: string[];
};

function CreatorCard({
  profileImage,
  name,
  email,
  onlineProfile,
  twitter,
  tiktok,
  instagram,
  tags,
}: CreatorCardType) {
  return (
    <div className="profile-card">
      <div className="profile--image-container">
        <Image
          className="profile-image"
          src={profileImage ?? man}
          alt="creator profile image"
          width={100}
          height={100}
          placeholder="empty"
        />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        {email && <p className="info-item">Email: {email}</p>}
        {onlineProfile && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={onlineProfile}>
              Online Profile
            </a>
          </p>
        )}
        {twitter && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={twitter}>
              Twitter
            </a>
          </p>
        )}
        {tiktok && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={tiktok}>
              TickTok
            </a>
          </p>
        )}
        {instagram && (
          <p className="info-item">
            <a target="_blank" rel="noreferrer" href={instagram}>
              Instagram
            </a>
          </p>
        )}
        <div className="profile-meta">
          {tags &&
            tags.map((tag, index) =>
              !isBlankStr(tag) ? (
                <p className="meta-item" key={"profile-tag" + index}>
                  {tag}
                </p>
              ) : null
            )}
        </div>

        {email && (
          <div className="profile--send-email">
            <CustomButton
              text="Send Email"
              type="secondary"
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatorCard;
