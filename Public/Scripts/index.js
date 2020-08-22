const search = document.getElementById("searchBar");

let data;
const getData = async () => {
  const res = await fetch("http://localhost:3000/search");
  data = await res.json();
  initialize();
};

getData();

const initialize = () => {
  search.addEventListener("input", () => searchQuery(search.value));
  console.log(data);
};

const searchQuery = (query) => {
  let matches = data.filter((d) => {
    const regex = new RegExp(`^${query}`, "gi");
    const regex2 = new RegExp(`${query}`, "gi");
    d.rollno = String(d.rollno);
    return d.name.match(regex) || d.rollno.match(regex2);
  });
  if (query.length > 0) createSerchBar(matches);
};

const createSerchBar = (arr) => {
  let str = `<tr>
  <th>Name</th>
  <th>Roll No</th>
  <th>Dept.</th>
  </tr>`;
  let table = document.querySelector("table");
  arr.forEach((a) => {
    let rowObject = `<tr>
    <td><a href="/user/${a.rollno}">${a.name}</a></td>
    <td>${a.rollno}</td>
    <td>${a.dept}</td>
    </tr>`;
    str += rowObject;
  });
  table.innerHTML = str;
};
