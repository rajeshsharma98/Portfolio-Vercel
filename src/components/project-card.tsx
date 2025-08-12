import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography variant="h5" className="mb-2 text-blue-gray-900">
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button color="gray" size="sm">
            see details
          </Button>
      </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
