let participants = [
  {
    name: "Suelen Salvino",
    email: "suelen@email.com",
    date: new Date(2024, 2, 22, 19, 20),
    dateCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    name: "João Silva",
    email: "joao@email.com",
    date: new Date(2024, 2, 20, 18, 30),
    dateCheckIn: new Date(2024, 2, 25, 21, 45)
  },
  {
    name: "Maria Oliveira",
    email: "maria@email.com",
    date: new Date(2024, 2, 19, 20, 15),
    dateCheckIn: new Date(2024, 2, 25, 21, 30)
  },
  {
    name: "Pedro Souza",
    email: "pedro@email.com",
    date: new Date(2024, 2, 18, 17, 45),
    dateCheckIn: new Date(2024, 2, 25, 20, 50)
  },
  {
    name: "Ana Santos",
    email: "ana@email.com",
    date: new Date(2024, 2, 17, 16, 40),
    dateCheckIn: new Date(2024, 2, 25, 20, 10)
  },
  {
    name: "Lucas Lima",
    email: "lucas@email.com",
    date: new Date(2024, 2, 16, 21, 10),
    dateCheckIn: new Date(2024, 2, 25, 19, 55)
  },
  {
    name: "Carla Costa",
    email: "carla@email.com",
    date: new Date(2024, 2, 15, 19, 55),
    dateCheckIn: new Date(2024, 2, 25, 19, 20)
  },
  {
    name: "Marcos Almeida",
    email: "marcos@email.com",
    date: new Date(2024, 2, 14, 18, 20),
    dateCheckIn: new Date(2024, 2, 25, 18, 45)
  },
  {
    name: "Juliana Pereira",
    email: "juliana@email.com",
    date: new Date(2024, 2, 13, 17, 30),
    dateCheckIn: new Date(2024, 2, 25, 18, 10)
  },
  {
    name: "Ricardo Fernandes",
    email: "ricardo@email.com",
    date: new Date(2024, 2, 12, 20, 45),
    dateCheckIn: new Date(2024, 2, 25, 17, 35)
  }
];

const createNewParticipant = (participant) => {
  const date = dayjs(Date.now()).to(participant.date);
  const dateCheckIn = dayjs(Date.now()).to(participant.dateCheckIn);

  return `
  <tr>
      <td>
        <strong>
         ${participant.name}
       </strong>
       <small>
       ${participant.email}
       </small>
      </td>
      <td>${date}</td>
      <td>${dateCheckIn}</td>
    </tr>
    `
}

const updateList = (participants) => {
  let output = "";
  for (let participant of participants) {
    output += createNewParticipant(participant);
  }
  document.querySelector('tbody').innerHTML = output;
}

updateList(participants);