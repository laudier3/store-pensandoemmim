import React from "react";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

export const ShareButtons = ({ url, title }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Compartilhar no Facebook
      </FacebookShareButton>
      <br />
      <TwitterShareButton url={url} title={title}>
        Compartilhar no Twitter
      </TwitterShareButton>
      <br />
      <LinkedinShareButton url={url}>
        Compartilhar no LinkedIn
      </LinkedinShareButton>
      <br />
      <WhatsappShareButton url={url}>
        Compartilhar no WhatsApp
      </WhatsappShareButton>
    </div>
  );
};
