import s from "../modules/SocialMedia.module.css";

import discordImage from "../assets/discord.png";
import linkedinImage from "../assets/linkedin.png";
import {
  SocialMediaDto,
  SocialMediaItemComponent,
} from "../components/SocialMediaItemComponent";
import env from "../data/exposedEnv";

export function SocialMedia() {
  const socialMediaItems: SocialMediaDto[] = [
    {
      imagePath: linkedinImage,
      title: "Meu perfil no LinkedIn",
      description:
        "Seja muito bem vindo(a) ao meu perfil no LinkedIn, sempre estou publicando algo que eu acho interessante por lá",
      btnText: "Acessar perfil",
      link: env.linkedinProfileLink,
    },
    {
      imagePath: discordImage,
      title: "Minha comunidade no Discord",
      description:
        "Esta é minha comunidade no Discord, onde nos reunimos para falar sobre programação, games e hobbies",
      btnText: "Entrar agora",
      link: env.discordLink,
    },
  ];

  return (
    <div className={s.container}>
      {socialMediaItems.map((v, index) => (
        <SocialMediaItemComponent key={index} item={v} />
      ))}
    </div>
  );
}
