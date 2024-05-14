import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

export default function Techstack() {
  return (
    <div className="my-12 mx-auto px-4 md:px-12 justify-center">
      <div className="rounded-lg shadow-lg bg-white">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              Article Title
            </a>
          </h1>
        </header>
        <div className="flex items-center md:p-4">
          <p className="text-sm">Author Name</p>
          <a
            className="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
