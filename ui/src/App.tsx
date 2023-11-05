function App() {
  const doSomething = async () => {
    const response = await window.electron.healthCheck();
    alert(response);
  };

  return (
    <>
      Electron React App..
      <button onClick={doSomething}>Click Me</button>
    </>
  );
}

export default App;
