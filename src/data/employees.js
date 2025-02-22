const employees = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "active",
    profilePicture:
      "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1739926807~exp=1739930407~hmac=93d584400a3e9c4080fb83225a126141232e662646cee1009752704eeaa03646&w=1380",
  },
  {
    id: 2,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "leave",
    profilePicture:
      "https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?t=st=1739927066~exp=1739930666~hmac=e1c37b655e0c23ec3908bca7c93ce483a4171fb7947354b0ff2e3d0abae46df3&w=1380",
  },
  {
    id: 3,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "probation",
    profilePicture:
      "https://img.freepik.com/free-photo/isolated-shot-joyful-brenette-young-cute-woman-laughs-joyfully-as-hears-funny-anecdote-from-friend_496169-2540.jpg?t=st=1739926859~exp=1739930459~hmac=0528552315c9d62ef5910b1724a55731f2a0fa2607aa0e9e2c4ecfa3153942d4&w=1380",
  },
  {
    id: 4,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "terminated",
    profilePicture:
      "https://img.freepik.com/free-photo/businessman-black-suit-makes-thumb-up-sign_114579-18993.jpg?t=st=1739927111~exp=1739930711~hmac=02d0313350ff5745ce9264b32fd552f69921594b8b3fa81f85eb1f405ce734c1&w=1380",
  },
  {
    id: 5,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "active",
    profilePicture:
      "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1739926807~exp=1739930407~hmac=93d584400a3e9c4080fb83225a126141232e662646cee1009752704eeaa03646&w=1380",
  },
  {
    id: 6,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "leave",
    profilePicture:
      "https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?t=st=1739927066~exp=1739930666~hmac=e1c37b655e0c23ec3908bca7c93ce483a4171fb7947354b0ff2e3d0abae46df3&w=1380",
  },
  {
    id: 7,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "probation",
    profilePicture:
      "https://img.freepik.com/free-photo/isolated-shot-joyful-brenette-young-cute-woman-laughs-joyfully-as-hears-funny-anecdote-from-friend_496169-2540.jpg?t=st=1739926859~exp=1739930459~hmac=0528552315c9d62ef5910b1724a55731f2a0fa2607aa0e9e2c4ecfa3153942d4&w=1380",
  },
  {
    id: 8,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "terminated",
    profilePicture:
      "https://img.freepik.com/free-photo/businessman-black-suit-makes-thumb-up-sign_114579-18993.jpg?t=st=1739927111~exp=1739930711~hmac=02d0313350ff5745ce9264b32fd552f69921594b8b3fa81f85eb1f405ce734c1&w=1380",
  },
  {
    id: 9,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "active",
    profilePicture:
      "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1739926807~exp=1739930407~hmac=93d584400a3e9c4080fb83225a126141232e662646cee1009752704eeaa03646&w=1380",
  },
  {
    id: 10,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "leave",
    profilePicture:
      "https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?t=st=1739927066~exp=1739930666~hmac=e1c37b655e0c23ec3908bca7c93ce483a4171fb7947354b0ff2e3d0abae46df3&w=1380",
  },
  {
    id: 11,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "probation",
    profilePicture:
      "https://img.freepik.com/free-photo/isolated-shot-joyful-brenette-young-cute-woman-laughs-joyfully-as-hears-funny-anecdote-from-friend_496169-2540.jpg?t=st=1739926859~exp=1739930459~hmac=0528552315c9d62ef5910b1724a55731f2a0fa2607aa0e9e2c4ecfa3153942d4&w=1380",
  },
  {
    id: 12,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "terminated",
    profilePicture:
      "https://img.freepik.com/free-photo/businessman-black-suit-makes-thumb-up-sign_114579-18993.jpg?t=st=1739927111~exp=1739930711~hmac=02d0313350ff5745ce9264b32fd552f69921594b8b3fa81f85eb1f405ce734c1&w=1380",
  },
  {
    id: 13,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "active",
    profilePicture:
      "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg?t=st=1739926807~exp=1739930407~hmac=93d584400a3e9c4080fb83225a126141232e662646cee1009752704eeaa03646&w=1380",
  },
  {
    id: 14,
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    status: "leave",
    profilePicture:
      "https://img.freepik.com/free-photo/young-person-intership_23-2149315589.jpg?t=st=1739927066~exp=1739930666~hmac=e1c37b655e0c23ec3908bca7c93ce483a4171fb7947354b0ff2e3d0abae46df3&w=1380",
  },
  {
    id: 15,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "probation",
    profilePicture:
      "https://img.freepik.com/free-photo/isolated-shot-joyful-brenette-young-cute-woman-laughs-joyfully-as-hears-funny-anecdote-from-friend_496169-2540.jpg?t=st=1739926859~exp=1739930459~hmac=0528552315c9d62ef5910b1724a55731f2a0fa2607aa0e9e2c4ecfa3153942d4&w=1380",
  },
  {
    id: 16,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, City, Country",
    status: "terminated",
    profilePicture:
      "https://img.freepik.com/free-photo/businessman-black-suit-makes-thumb-up-sign_114579-18993.jpg?t=st=1739927111~exp=1739930711~hmac=02d0313350ff5745ce9264b32fd552f69921594b8b3fa81f85eb1f405ce734c1&w=1380",
  },
];

export default employees;
