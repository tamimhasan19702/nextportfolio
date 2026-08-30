import type { ReactNode } from "react";

export interface EducationRowProps {
  title: string;
  org: string;
  time: string;
}

export interface CertificateCardProps extends EducationRowProps {
  credential?: string;
  url?: string;
}

export interface TitleProps {
  children: ReactNode;
}
