/// <reference types="@rbxts/testez/globals" />

export = (): void => {
	describe("one", () => {
		it("should be true", () => {
			expect(true).to.equal(true);
		});
	});
	describe("two", () => {
		it("should be true", () => {
			expect(false).to.equal(false);
		});
	});
};
