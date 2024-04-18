   class GenerateImgUrl {
    private readonly nmId: number;
    private readonly size: string;
    private readonly number: number;
    private readonly format: string;

    constructor({ nmId, size, number, format }: { nmId: number, size?: string, number?: number, format?: string }) {
        this.nmId = nmId;
        this.size = size ?? "big";
        this.number = number ?? 1;
        this.format = format ?? "webp";
    }

    getHost(id: number) {
        const urlParts = [
            { range: [0, 143], url: "//basket-01.wb.ru" },
            { range: [144, 287], url: "//basket-02.wb.ru" },
            { range: [288, 431], url: "//basket-03.wb.ru" },
            { range: [432, 719], url: "//basket-04.wb.ru" },
            { range: [720, 1007], url: "//basket-05.wb.ru" },
            { range: [1008, 1061], url: "//basket-06.wb.ru" },
            { range: [1062, 1115], url: "//basket-07.wb.ru" },
            { range: [1116, 1169], url: "//basket-08.wb.ru" },
            { range: [1170, 1313], url: "//basket-09.wb.ru" },
            { range: [1314, 1601], url: "//basket-10.wb.ru" },
            { range: [1602, 1655], url: "//basket-11.wb.ru" },
            { range: [1656, 1919], url: "//basket-12.wb.ru" },
            { range: [1920, 2045], url: "//basket-13.wb.ru" },
            { range: [2046, Infinity], url: "//basket-14.wb.ru" }
        ];

        const url = urlParts.find(
            ({ range }) => id >= range[0] && id <= range[1]
        );
        return url;
    }

    url(): string {
        const vol = ~~(this.nmId / 1e5),
            part = ~~(this.nmId / 1e3);
        return `https:${this.getHost(vol)}/vol${vol}/part${part}/${
            this.nmId
        }/images/${this.size}/${this.number}.${this.format}`;
    }
}
