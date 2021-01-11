import Header from "../Header/Header";
import Results from "../Results/Results";

function Layout({ propsInput, propsBtnSend, metaContent }) {
  return (
    <div className="App">
      <Header propsInput={propsInput} propsBtnSend={propsBtnSend} />
      <Results metaContent={metaContent} />
    </div>
  );
}
export default Layout;
