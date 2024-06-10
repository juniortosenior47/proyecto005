import dynamic from "next/dynamic";

const ButtonFromRemote2 = dynamic(() =>
  import("Remote2/Button").catch((err) => console.error(err))
);

export default function Home() {
  return (
    <div>
      <ButtonFromRemote2 />
    </div>
  );
}
