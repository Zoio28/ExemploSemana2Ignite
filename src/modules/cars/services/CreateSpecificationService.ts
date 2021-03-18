import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExistis = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExistis) {
            throw new Error("Specification already existis!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
};

export { CreateSpecificationService };