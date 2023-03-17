// /api/new-meetup
import { supabase } from "../../lib/supabaseClient";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const result = await supabase.from("meetups").insert(data);
    console.log(result);
    res.status(201).json({
      message: "Meetup inserted",
    });
  }
};

export default handler;
