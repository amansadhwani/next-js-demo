import React from "react";
import Link from "next/link";

export const getInitialProps = (async) => {
  // can't use in prod so use getInitialProps else demo getServerSideProps
  return {
    props: {
      revalidate: 10,
      number: Math.floor(Math.random() * 16) + 5,
    },
  };
};

export default function StaticServerPro(props) {
  return (
    <>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <div>StaticServerPro {props.number}</div>
    </>
  );
}
