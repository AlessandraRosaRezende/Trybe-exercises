const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const entrega = order.order.delivery.deliveryPerson;
  const pessoa = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apartamento = order.address.apartment;
  console.log(`Olá ${entrega}, entrega para: ${pessoa}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}.`)
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const mudaNome = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const valorTotal = order.payment.total = '50';
  console.log(`Olá ${mudaNome}, o total do seu pedido de pizzas de ${pizzas}, e ${drinks} é R$ ${valorTotal},00.`);
}
orderModifier(order);

const mudaPizzas = (order) => {
  // Adicione abaixo as informações necessárias.
  const mudaNome = order.name = 'Luiz Silva';
  const mudaPizza = order.order.pizza = 'muzzarella, calabresa';
  const drinks = order.order.drinks.coke.type;
  const valorTotal = order.payment.total = '50';
  console.log(`Olá ${mudaNome}, o total do seu pedido de pizzas de ${mudaPizza}, e ${drinks} é R$ ${valorTotal},00.`);
}
mudaPizzas(order);