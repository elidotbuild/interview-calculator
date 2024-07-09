import Head from "next/head";
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import PageContent from "~/components/PageContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent>
        <div className="flex flex-col gap-4">
          <h1>Welcome</h1>
          <div>
            This tool helps you see what incentives you qualify for based on your
            eligibility.
          </div>
          <Link href="/basic-info">
            <Button color="primary">Get Started</Button>
          </Link>
        </div>
      </PageContent>
    </>
  );
}
