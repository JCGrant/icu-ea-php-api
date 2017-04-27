const app = document.getElementById('app');

const memberToRow = (member) => {
  const row = document.createElement('tr');
  row.innerHTML += '<td>' + member.CID +'</td>';
  row.innerHTML += '<td>' + member.Login +'</td>';
  row.innerHTML += '<td>' + member.FirstName +'</td>';
  row.innerHTML += '<td>' + member.Surname +'</td>';
  row.innerHTML += '<td>' + member.Email +'</td>';
  row.innerHTML += '<td>' + member.MemberType +'</td>';
  return row;
};

fetch('/api.php')
  .then((response) => response.json())
  .then((responseJson) => responseJson.map(memberToRow))
  .then((memberRows) => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML += '<th>CID</th>';
    headerRow.innerHTML += '<th>Login</th>';
    headerRow.innerHTML += '<th>First Name</th>';
    headerRow.innerHTML += '<th>Surname</th>';
    headerRow.innerHTML += '<th>Email</th>';
    headerRow.innerHTML += '<th>Member Type</th>';
    table.appendChild(headerRow);
    app.appendChild(table);
    memberRows.forEach((memberRow) => {
      table.appendChild(memberRow);
    });
  });