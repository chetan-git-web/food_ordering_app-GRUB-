
export function searchFilterRestro(searchValue,allrestro){
    if(searchValue==""){
      return allrestro;
    }
    return allrestro.filter((x)=>{
      return (x.info.name.toLowerCase()).includes(searchValue.toLowerCase())
    }
    )
  }