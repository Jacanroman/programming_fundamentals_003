const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });

    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Chronicles of Narnia"
        )
      ).toBe(false);
    });
  });


  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the total number of books which start with a given letter", () => {
      expect(
        catalogueService.countBooksByFirstLetter(
          "W"
        )
      ).toBe(2);
    });
    
    test("returns true if the book exists", () => {
      expect(
        catalogueService.countBooksByFirstLetter(
          "b"
        )
      ).toBe(3);
    });
    
  });



  describe("catalogueService.getQuantity", () => {
    test("returns the stocks of books  which  with a given title", () => {
      expect(
        catalogueService.getQuantity(
          "The Catcher in the Rye"
        )
      ).toBe(10);
    });
    
    
    test("returns true if the book exists", () => {
      expect(
        catalogueService.getQuantity(
          "2666"
        )
      ).toBe(17);
    });
    
    
  });


  describe("catalogueService.getBooksByAuthor", () => {
    test("returns the stocks of books  which  with a given title", () => {
      expect(
        catalogueService.getBooksByAuthor(
          "Robert Bolaño"
        )
      ).toEqual(
        [
          { title: "2666", author: "Robert Bolaño", quantity: 17 },
          { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
        ]

        );
    });
    
  });


  describe("catalogueService.checkQuantity", () => {
    test("returns true if in stock or false if not", () => {
      expect(
        catalogueService.checkQuantity(
          "By Night In Chile", 4
        )
      ).toBe(true);
    });
    

   test("returns true if in stock or false if not", () => {
    expect(
      catalogueService.checkQuantity(
        "By Night In Chile", 100
      )
    ).toBe(false);
    });

  });
  


});
