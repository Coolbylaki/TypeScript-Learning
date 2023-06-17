interface GreeterProps {
	person: string;
}

const Greeter = ({ person }: GreeterProps) => {
	return <h1>Hello, {person}</h1>;
};

export default Greeter;
