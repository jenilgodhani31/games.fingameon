import path from "path";
import fs from "fs";
import Home from "@/containers/Home";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/gameData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return { props: { data } };
}

export default function Page({ data }) {
  return <Home data={data} />;
}
