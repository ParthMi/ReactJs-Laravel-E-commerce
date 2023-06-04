const Home = () => {

    return <h1>hello {localStorage.getItem('name')}</h1>;
  };
  
  export default Home;