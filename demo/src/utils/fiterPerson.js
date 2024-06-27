export function filterpersonData(search, allPerson) {
  const filteredPerson = allPerson.filter((res) => {
    const fullName = `${res?.firstName ?? ""} ${
      res?.lastName ?? ""
    }`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });
  return filteredPerson;
}
export function filterpersonDataByID(search, allPerson) {
  const filteredPerson = allPerson.filter((res) =>
    res.dasId.toString().includes(search)
  );

  return filteredPerson;
}
// export function filterpersonComment(search, allPerson) {
//   console.log("here")
//   const filteredPerson = allPerson.filter((res) => {
//     const data = res.personRemarks
//     const finaldata =  data.filter((res1) => {

//       console.log(res1)

//       return res1.remark.toLowerCase().includes(search.toLowerCase());

//     });
//     return finaldata
//   });
//   return filteredPerson;
// }

export function filterpersonComment(search, personRemarks) {
  // console.log("here");
  const filteredPerson = personRemarks.filter((res) => {
    // Check if any remark includes the search term
    return res.remark.toLowerCase().includes(search.toLowerCase());
  });
  if (filteredPerson.length == 0) return null;
  return filteredPerson;
}
