import PageTemplate from "../components/PageTemplate";
import BackBtn from "../components/BackBtn";
import Posts from "../components/Posts";

export default function Blog() {

  return (
    <PageTemplate orignal={false}>
      <BackBtn/>
        <>
          <Posts/>
        </>
    </PageTemplate>
  );
}
