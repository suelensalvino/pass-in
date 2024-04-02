let participants = [
  {
    name: "Suelen Salvino",
    email: "suelen@email.com",
    date: new Date(2024, 2, 22, 19, 20),
    dateCheckIn: null
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
  const date = dayjs(Date.now())
  .to(participant.date);

  let dateCheckIn = dayjs(Date.now())
  .to(participant.dateCheckIn);
  
  if(participant.dateCheckIn == null) {
    dateCheckIn = `
      <button
        data-email="${participant.email}"
        onclick="checkIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participant.name}
      </strong>
      <br>
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
  let output = ""
  for(let participant of participants) {
    output = output + createNewParticipant(participant);
  }
  
  document.querySelector('tbody').innerHTML = output;
}

updateList(participants);

const addParticipant = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  const participant = {
    name: form.get('name'),
    email: form.get('email'),
    date: new Date(),
    dateCheckIn: null  
  }

  const participantExist = participants.find(
    (p) => p.email == participant.email
  );

  if(participantExist) {
    alert('E-mail já cadastrado!');
    return
  }

  participants = [participant, ...participants]
  updateList(participants);

  event.target.querySelector('[name="name"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const checkIn = (event) => {
  const messageConfirm = 'Tem certeza que deseja fazer o check-in?' 

  if(confirm(messageConfirm) == false) {
    return
  }

  const participant = participants.find(
    (p) => p.email == event.target.dataset.email  
  );
  
  participant.dateCheckIn = new Date()

  updateList(participants);
}