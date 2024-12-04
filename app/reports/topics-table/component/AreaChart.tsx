"use client"
export function AreaChartComponent() {
    return (
        <div className="w-20">
             <svg viewBox="0 0 40 15" preserveAspectRatio="none">
                <g>
                    <circle
                        cx="2"
                        cy="13"
                        r="2"
                        style={{
                            stroke: "none",
                            strokeWidth: 0,
                            fillOpacity: 0.1,
                            fill: "rgb(124, 181, 236)",
                            pointerEvents: "auto",
                        }}
                    />
                    <circle
                        cx="3.894736842105263"
                        cy="12.967131474103587"
                        r="2"
                        style={{
                            stroke: "none",
                            strokeWidth: 0,
                            fillOpacity: 0.1,
                            fill: "rgb(124, 181, 236)",
                            pointerEvents: "auto",
                        }}
                    />
                    <circle
                        cx="5.789473684210526"
                        cy="12.989043824701197"
                        r="2"
                        style={{
                            stroke: "none",
                            strokeWidth: 0,
                            fillOpacity: 0.1,
                            fill: "rgb(124, 181, 236)",
                            pointerEvents: "auto",
                        }}
                    />
                    <circle
                        cx="7.684210526315789"
                        cy="12.923306772908367"
                        r="2"
                        style={{
                            stroke: "none",
                            strokeWidth: 0,
                            fillOpacity: 0.1,
                            fill: "rgb(124, 181, 236)",
                            pointerEvents: "auto",
                        }}
                    />
                    <circle
                        cx="9.578947368421051"
                        cy="12.780876494023905"
                        r="2"
                        style={{
                            stroke: "none",
                            strokeWidth: 0,
                            fillOpacity: 0.1,
                            fill: "rgb(124, 181, 236)",
                            pointerEvents: "auto",
                        }}
                    />
                     Add the remaining circles similarly
                    <polyline
                        points="2 13 3.894736842105263 12.967131474103587 5.789473684210526 12.989043824701197 7.684210526315789 12.923306772908367 9.578947368421051 12.780876494023905 11.473684210526315 12.737051792828685 13.368421052631579 12.627490039840637 15.26315789473684 10.879980079681275 17.157894736842103 6.771414342629482 19.052631578947366 5.5826693227091635 20.94736842105263 2.635458167330677 22.842105263157894 2 24.736842105263158 5.3142430278884465 26.63157894736842 5.8401394422310755 28.52631578947368 3.4955179282868527 30.421052631578945 2.2136454183266934 32.315789473684205 4.399402390438247 34.21052631578947 7.65886454183267 36.10526315789473 7.856075697211156 38 8.239541832669323"
                        style={{
                            stroke: "rgb(124, 181, 236)",
                            strokeWidth: 1,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                            fill: "none",
                        }}
                    />
                </g>

            </svg>


        </div>
    )
}
