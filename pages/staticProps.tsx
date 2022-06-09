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

export default function StaticProps(props) {
  return (
    <>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <div>staticProps {props.number}</div>
    </>
  );
}
