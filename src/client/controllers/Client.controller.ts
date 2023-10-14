import { Controller, OnStart, OnRender } from "@flamework/core";

@Controller()
export class ClientController implements OnStart, OnRender {
	onStart() {
		print("Client started!");
	}

	onRender(dt: number): void {
		print("Client rendering!");
	}
}
