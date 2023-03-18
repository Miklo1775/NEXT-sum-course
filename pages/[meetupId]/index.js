import MeetupDetail from "../../components/meetups/MeetupDetail";
import { supabase } from "../../lib/supabaseClient";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        alt={props.meetupData.title}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const response = await supabase.from("meetups").select("id");
  console.log(response.data);
  return {
    fallback: "blocking",
    paths: response.data.map((meetup) => {
      return {
        params: {
          meetupId: `${meetup.id}`,
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  //fetch data for single meetup

  const response = await supabase.from("meetups").select().eq("id", meetupId);

  const data = response.data[0];
  console.log(response);

  return {
    props: {
      meetupData: data,
    },
    revalidate: 1,
  };
};

export default MeetupDetails;
