import Head from "next/head";
import Link from "next/link";

import {
  PolymorhpAsButton,
  PolymorhpButton,
} from "@/components/polymorphs/button";
import { UnsafeButton, UnsafeIconButton } from "@/components/unsafe/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>a11y demo</title>
        <meta
          name="description"
          content="Demo application showing a couple of a11y best practices."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed inset-0 flex items-center justify-center">
        <Link href="/#content">
          <span className="sr-only">Press to jump to main section</span>
        </Link>
        <div
          id="content"
          className="flex flex-col gap-2 rounded-md border-2 px-3 py-2 shadow-xl"
        >
          <h1 className="text-lg font-semibold">WCAG - demo project</h1>
          <section className="flex flex-col items-center justify-center">
            <h2>Safe Items</h2>
            <div className="flex flex-col gap-2 py-1">
              <PolymorhpButton onClick={() => alert("safe button clicked")}>
                <span className="sr-only">
                  {/* fill this out to describe whatever the click action does */}
                  Click here to show an alert
                </span>
                <span>safe button</span>
              </PolymorhpButton>
              <PolymorhpAsButton
                onClick={() => alert("safe div as button clicked")}
                as="button"
              >
                <span className="sr-only">
                  {/* fill this out to describe whatever the click action does */}
                  Click here to show an alert
                </span>
                <span>safe div as button</span>
              </PolymorhpAsButton>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center">
            <h2>Unsafe Items</h2>
            <div className="flex flex-col gap-2 py-1">
              <UnsafeButton onClick={() => alert("unsafe button clicked")}>
                {/* screenreader will have no clue about this button or its usage */}
                <span>unsafe button</span>
              </UnsafeButton>
              <UnsafeIconButton className="mx-auto w-auto" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
