import { TestBed, inject } from "@angular/core/testing";

import { RazaService } from "./raza.service";

describe("RazaService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RazaService]
    });
  });

  it("should be created", inject([RazaService], (service: RazaService) => {
    expect(service).toBeTruthy();
  }));
});
