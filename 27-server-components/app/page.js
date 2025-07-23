/*import ClientDemo from "@/components/ClientDemo";
import RSCDemo from "@/components/RSCDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import ServerActionsDemo2 from "@/components/ServerActionsDemo2";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import UsePromiseDemo2 from "@/components/UsePromisesDemo2";*/

import UsePromiseDemo3 from "@/components/UsePromisesDemo3";
import { Suspense } from "react";
import fs from 'node:fs/promises';
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) => 
    setTimeout(async() => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      resolve(users);
      //reject(new Error('Error test!'));
    }, 2000)
  );

  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      {/* <DataFetchingDemo /> */}
      {/* <ServerActionsDemo /> */}
      {/* <ServerActionsDemo2 /> */}
      <ErrorBoundary fallback={<p>Something went wrong!!!</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo3 usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
