import React from "react";
import Link from "next/link";

export const getStaticProps = (async) => {
  return {
    props: {
      revalidate: 10,
      number: Math.floor(Math.random() * 16) + 5,
    },
  };
};

export const getStaticPaths = (async) => {
  return {
    paths: [{ params: { name: "one" } }],
    fallback: false,
  };
};

export default function Name(props) {
  return (
    <>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <div>static paths {props.number}</div>
    </>
  );
}
