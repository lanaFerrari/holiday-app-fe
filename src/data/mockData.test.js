import { people, holidays, holidayTypes } from "./mockData";

describe("mockData", () => {
  describe("people", () => {
    test("should export a non-empty array of people", () => {
      expect(Array.isArray(people)).toBe(true);
      expect(people.length).toBeGreaterThan(0);
    });

    test("every person should have required fields", () => {
      people.forEach((person) => {
        expect(person).toHaveProperty("id");
        expect(person).toHaveProperty("name");
        expect(person).toHaveProperty("jobTitle");
        expect(person).toHaveProperty("email");
      });
    });

    test("every person should have a unique id", () => {
      const ids = people.map((person) => person.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(people.length);
    });
  });

  describe("holidays", () => {
    test("should export a non-empty array of holidays", () => {
      expect(Array.isArray(holidays)).toBe(true);
      expect(holidays.length).toBeGreaterThan(0);
    });

    test("every holiday should have required fields", () => {
      holidays.forEach((holiday) => {
        expect(holiday).toHaveProperty("id");
        expect(holiday).toHaveProperty("personId");
        expect(holiday).toHaveProperty("startDate");
        expect(holiday).toHaveProperty("endDate");
        expect(holiday).toHaveProperty("type");
      });
    });

    test("every holiday startDate should be a valid date string", () => {
      holidays.forEach((holiday) => {
        const date = new Date(holiday.startDate);
        expect(date.toString()).not.toBe("Invalid Date");
      });
    });

    test("every holiday endDate should be on or after startDate", () => {
      holidays.forEach((holiday) => {
        const start = new Date(holiday.startDate);
        const end = new Date(holiday.endDate);
        expect(end >= start).toBe(true);
      });
    });

    test("every holiday should reference a valid person", () => {
      const personIds = people.map((person) => person.id);
      holidays.forEach((holiday) => {
        expect(personIds).toContain(holiday.personId);
      });
    });
  });

  describe("holidayTypes", () => {
    test("should export a non-empty array of holiday types", () => {
      expect(Array.isArray(holidayTypes)).toBe(true);
      expect(holidayTypes.length).toBeGreaterThan(0);
    });

    test("every holiday type should have id, label and color", () => {
      holidayTypes.forEach((holidayType) => {
        expect(holidayType).toHaveProperty("id");
        expect(holidayType).toHaveProperty("label");
        expect(holidayType).toHaveProperty("color");
      });
    });

    test("every holiday in holidays should reference a valid type", () => {
      const typeIds = holidayTypes.map((holidayType) => holidayType.id);
      holidays.forEach((holiday) => {
        expect(typeIds).toContain(holiday.type);
      });
    });
  });
});
