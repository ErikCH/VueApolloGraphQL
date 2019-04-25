import { Dog } from "./models/dog";

export const resolvers = {
    Query: {
        helloWorld:() => 'hello world',
        dogs: () => Dog.find()

    },
    Mutation: {
        createDog: async(_, { name }) => {
            const puppy = new Dog({ name });
            await puppy.save();
            return puppy;
        }
    }
}