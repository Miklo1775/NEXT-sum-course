import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { supabase } from "../lib/supabaseClient";
import { Fragment } from "react";

// domainname.com/
// *starting page

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Just a place for javascript devs to find each other"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   //fetch data form api here or from file system
//   //data here will always run on the server and not client

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  //fetch data from an api
  //always returns an object
  //this will be the props used in the HomePage component

  const result = await supabase.from("meetups").select("*");
  return {
    props: {
      meetups: result.data,
    },
    revalidate: 1,
  };
};
export default HomePage;
