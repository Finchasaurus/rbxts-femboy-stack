import { OnStart, OnTick, Service } from "@flamework/core";
import { UserInputService } from "@rbxts/services";

@Service()
export class ServerService implements OnStart, OnTick {
	onStart() {
		print("Server started!");
	}

	onTick(dt: number): void {
		print("Server ticked!");
	}
}
