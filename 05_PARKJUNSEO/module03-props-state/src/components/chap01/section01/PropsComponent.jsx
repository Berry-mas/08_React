import PropsComponent from "@/components/chap01/section01/PropsComponent";

// 자식컴포넌트이고 부모컴포넌트로부터 props를 통해서 값을 전달받는다.
function Welcome(props) {
  return <h1> Hello, {props.name}</h1>;
}

function PropsComponent() {
  return (
    <div>
      <Welcome name="Alice"></Welcome>
      <Welcome name="Bob"></Welcome>
    </div>
  );
}

export default PropsComponent;
