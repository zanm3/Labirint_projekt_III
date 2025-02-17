const mazeCoordinates = [
    { x1: 2, y1: 2, x2: 226, y2: 2 },
    { x1: 242, y1: 2, x2: 482, y2: 2 },
    { x1: 18, y1: 18, x2: 50, y2: 18 },
    { x1: 82, y1: 18, x2: 114, y2: 18 },
    { x1: 162, y1: 18, x2: 178, y2: 18 },
    { x1: 194, y1: 18, x2: 210, y2: 18 },
    { x1: 402, y1: 18, x2: 466, y2: 18 },
    { x1: 66, y1: 34, x2: 82, y2: 34 },
    { x1: 114, y1: 34, x2: 130, y2: 34 },
    { x1: 146, y1: 34, x2: 162, y2: 34 },
    { x1: 178, y1: 34, x2: 258, y2: 34 },
    { x1: 274, y1: 34, x2: 306, y2: 34 },
    { x1: 354, y1: 34, x2: 402, y2: 34 },
    { x1: 466, y1: 34, x2: 482, y2: 34 },
    { x1: 34, y1: 50, x2: 66, y2: 50 },
    { x1: 82, y1: 50, x2: 98, y2: 50 },
    { x1: 130, y1: 50, x2: 178, y2: 50 },
    { x1: 210, y1: 50, x2: 242, y2: 50 },
    { x1: 258, y1: 50, x2: 274, y2: 50 },
    { x1: 306, y1: 50, x2: 322, y2: 50 },
    { x1: 338, y1: 50, x2: 354, y2: 50 },
    { x1: 370, y1: 50, x2: 386, y2: 50 },
    { x1: 402, y1: 50, x2: 434, y2: 50 },
    { x1: 466, y1: 50, x2: 482, y2: 50 },
    { x1: 18, y1: 66, x2: 34, y2: 66 },
    { x1: 98, y1: 66, x2: 130, y2: 66 },
    { x1: 162, y1: 66, x2: 210, y2: 66 },
    { x1: 242, y1: 66, x2: 258, y2: 66 },
    { x1: 290, y1: 66, x2: 306, y2: 66 },
    { x1: 322, y1: 66, x2: 338, y2: 66 },
    { x1: 386, y1: 66, x2: 402, y2: 66 },
    { x1: 418, y1: 66, x2: 466, y2: 66 },
    { x1: 50, y1: 82, x2: 82, y2: 82 },
    { x1: 98, y1: 82, x2: 114, y2: 82 },
    { x1: 130, y1: 82, x2: 146, y2: 82 },
    { x1: 178, y1: 82, x2: 194, y2: 82 },
    { x1: 210, y1: 82, x2: 226, y2: 82 },
    { x1: 258, y1: 82, x2: 290, y2: 82 },
    { x1: 306, y1: 82, x2: 322, y2: 82 },
    { x1: 338, y1: 82, x2: 386, y2: 82 },
    { x1: 434, y1: 82, x2: 450, y2: 82 },
    { x1: 34, y1: 98, x2: 50, y2: 98 },
    { x1: 114, y1: 98, x2: 178, y2: 98 },
    { x1: 194, y1: 98, x2: 210, y2: 98 },
    { x1: 226, y1: 98, x2: 274, y2: 98 },
    { x1: 290, y1: 98, x2: 306, y2: 98 },
    { x1: 338, y1: 98, x2: 354, y2: 98 },
    { x1: 370, y1: 98, x2: 386, y2: 98 },
    { x1: 418, y1: 98, x2: 434, y2: 98 },
    { x1: 450, y1: 98, x2: 466, y2: 98 },
    { x1: 2, y1: 114, x2: 34, y2: 114 },
    { x1: 50, y1: 114, x2: 114, y2: 114 },
    { x1: 146, y1: 114, x2: 178, y2: 114 },
    { x1: 210, y1: 114, x2: 274, y2: 114 },
    { x1: 322, y1: 114, x2: 338, y2: 114 },
    { x1: 354, y1: 114, x2: 402, y2: 114 },
    { x1: 434, y1: 114, x2: 450, y2: 114 },
    { x1: 18, y1: 130, x2: 34, y2: 130 },
    { x1: 66, y1: 130, x2: 82, y2: 130 },
    { x1: 114, y1: 130, x2: 146, y2: 130 },
    { x1: 194, y1: 130, x2: 210, y2: 130 },
    { x1: 226, y1: 130, x2: 242, y2: 130 },
    { x1: 306, y1: 130, x2: 322, y2: 130 },
    { x1: 338, y1: 130, x2: 354, y2: 130 },
    { x1: 370, y1: 130, x2: 386, y2: 130 },
    { x1: 402, y1: 130, x2: 466, y2: 130 },
    { x1: 2, y1: 146, x2: 18, y2: 146 },
    { x1: 34, y1: 146, x2: 50, y2: 146 },
    { x1: 82, y1: 146, x2: 114, y2: 146 },
    { x1: 130, y1: 146, x2: 194, y2: 146 },
    { x1: 274, y1: 146, x2: 306, y2: 146 },
    { x1: 386, y1: 146, x2: 402, y2: 146 },
    { x1: 450, y1: 146, x2: 482, y2: 146 },
    { x1: 18, y1: 162, x2: 130, y2: 162 },
    { x1: 178, y1: 162, x2: 194, y2: 162 },
    { x1: 210, y1: 162, x2: 274, y2: 162 },
    { x1: 338, y1: 162, x2: 354, y2: 162 },
    { x1: 370, y1: 162, x2: 418, y2: 162 },
    { x1: 450, y1: 162, x2: 466, y2: 162 },
    { x1: 34, y1: 178, x2: 82, y2: 178 },
    { x1: 98, y1: 178, x2: 178, y2: 178 },
    { x1: 226, y1: 178, x2: 274, y2: 178 },
    { x1: 290, y1: 178, x2: 306, y2: 178 },
    { x1: 338, y1: 178, x2: 370, y2: 178 },
    { x1: 466, y1: 178, x2: 482, y2: 178 },
    { x1: 2, y1: 194, x2: 18, y2: 194 },
    { x1: 50, y1: 194, x2: 114, y2: 194 },
    { x1: 194, y1: 194, x2: 226, y2: 194 },
    { x1: 258, y1: 194, x2: 274, y2: 194 },
    { x1: 322, y1: 194, x2: 386, y2: 194 },
    { x1: 402, y1: 194, x2: 418, y2: 194 },
    { x1: 434, y1: 194, x2: 450, y2: 194 },
    { x1: 18, y1: 210, x2: 34, y2: 210 },
    { x1: 66, y1: 210, x2: 98, y2: 210 },
    { x1: 114, y1: 210, x2: 146, y2: 210 },
    { x1: 178, y1: 210, x2: 194, y2: 210 },
    { x1: 210, y1: 210, x2: 258, y2: 210 },
    { x1: 274, y1: 210, x2: 290, y2: 210 },
    { x1: 338, y1: 210, x2: 354, y2: 210 },
    { x1: 386, y1: 210, x2: 402, y2: 210 },
    { x1: 450, y1: 210, x2: 466, y2: 210 },
    { x1: 18, y1: 226, x2: 50, y2: 226 },
    { x1: 66, y1: 226, x2: 98, y2: 226 },
    { x1: 130, y1: 226, x2: 146, y2: 226 },
    { x1: 162, y1: 226, x2: 178, y2: 226 },
    { x1: 194, y1: 226, x2: 226, y2: 226 },
    { x1: 258, y1: 226, x2: 274, y2: 226 },
    { x1: 290, y1: 226, x2: 338, y2: 226 },
    { x1: 354, y1: 226, x2: 402, y2: 226 },
    { x1: 418, y1: 226, x2: 450, y2: 226 },
    { x1: 2, y1: 242, x2: 34, y2: 242 },
    { x1: 66, y1: 242, x2: 82, y2: 242 },
    { x1: 178, y1: 242, x2: 194, y2: 242 },
    { x1: 210, y1: 242, x2: 226, y2: 242 },
    { x1: 242, y1: 242, x2: 290, y2: 242 },
    { x1: 322, y1: 242, x2: 354, y2: 242 },
    { x1: 402, y1: 242, x2: 418, y2: 242 },
    { x1: 434, y1: 242, x2: 466, y2: 242 },
    { x1: 18, y1: 258, x2: 66, y2: 258 },
    { x1: 82, y1: 258, x2: 98, y2: 258 },
    { x1: 114, y1: 258, x2: 130, y2: 258 },
    { x1: 146, y1: 258, x2: 162, y2: 258 },
    { x1: 194, y1: 258, x2: 210, y2: 258 },
    { x1: 226, y1: 258, x2: 242, y2: 258 },
    { x1: 258, y1: 258, x2: 338, y2: 258 },
    { x1: 370, y1: 258, x2: 402, y2: 258 },
    { x1: 434, y1: 258, x2: 450, y2: 258 },
    { x1: 34, y1: 274, x2: 50, y2: 274 },
    { x1: 66, y1: 274, x2: 82, y2: 274 },
    { x1: 98, y1: 274, x2: 146, y2: 274 },
    { x1: 178, y1: 274, x2: 194, y2: 274 },
    { x1: 210, y1: 274, x2: 226, y2: 274 },
    { x1: 258, y1: 274, x2: 274, y2: 274 },
    { x1: 306, y1: 274, x2: 370, y2: 274 },
    { x1: 402, y1: 274, x2: 450, y2: 274 },
    { x1: 18, y1: 290, x2: 34, y2: 290 },
    { x1: 82, y1: 290, x2: 98, y2: 290 },
    { x1: 130, y1: 290, x2: 146, y2: 290 },
    { x1: 162, y1: 290, x2: 178, y2: 290 },
    { x1: 194, y1: 290, x2: 210, y2: 290 },
    { x1: 242, y1: 290, x2: 258, y2: 290 },
    { x1: 274, y1: 290, x2: 338, y2: 290 },
    { x1: 370, y1: 290, x2: 402, y2: 290 },
    { x1: 50, y1: 306, x2: 66, y2: 306 },
    { x1: 82, y1: 306, x2: 162, y2: 306 },
    { x1: 194, y1: 306, x2: 210, y2: 306 },
    { x1: 258, y1: 306, x2: 306, y2: 306 },
    { x1: 322, y1: 306, x2: 338, y2: 306 },
    { x1: 386, y1: 306, x2: 418, y2: 306 },
    { x1: 434, y1: 306, x2: 450, y2: 306 },
    { x1: 18, y1: 322, x2: 34, y2: 322 },
    { x1: 66, y1: 322, x2: 82, y2: 322 },
    { x1: 114, y1: 322, x2: 130, y2: 322 },
    { x1: 162, y1: 322, x2: 194, y2: 322 },
    { x1: 210, y1: 322, x2: 242, y2: 322 },
    { x1: 258, y1: 322, x2: 274, y2: 322 },
    { x1: 290, y1: 322, x2: 322, y2: 322 },
    { x1: 338, y1: 322, x2: 354, y2: 322 },
    { x1: 370, y1: 322, x2: 434, y2: 322 },
    { x1: 450, y1: 322, x2: 482, y2: 322 },
    { x1: 2, y1: 338, x2: 50, y2: 338 },
    { x1: 66, y1: 338, x2: 82, y2: 338 },
    { x1: 98, y1: 338, x2: 130, y2: 338 },
    { x1: 194, y1: 338, x2: 226, y2: 338 },
    { x1: 242, y1: 338, x2: 258, y2: 338 },
    { x1: 274, y1: 338, x2: 306, y2: 338 },
    { x1: 354, y1: 338, x2: 370, y2: 338 },
    { x1: 386, y1: 338, x2: 466, y2: 338 },
    { x1: 18, y1: 354, x2: 66, y2: 354 },
    { x1: 82, y1: 354, x2: 98, y2: 354 },
    { x1: 162, y1: 354, x2: 178, y2: 354 },
    { x1: 226, y1: 354, x2: 274, y2: 354 },
    { x1: 306, y1: 354, x2: 322, y2: 354 },
    { x1: 354, y1: 354, x2: 386, y2: 354 },
    { x1: 450, y1: 354, x2: 466, y2: 354 },
    { x1: 18, y1: 370, x2: 82, y2: 370 },
    { x1: 114, y1: 370, x2: 178, y2: 370 },
    { x1: 210, y1: 370, x2: 226, y2: 370 },
    { x1: 290, y1: 370, x2: 306, y2: 370 },
    { x1: 338, y1: 370, x2: 354, y2: 370 },
    { x1: 386, y1: 370, x2: 418, y2: 370 },
    { x1: 434, y1: 370, x2: 450, y2: 370 },
    { x1: 466, y1: 370, x2: 482, y2: 370 },
    { x1: 2, y1: 386, x2: 34, y2: 386 },
    { x1: 82, y1: 386, x2: 114, y2: 386 },
    { x1: 130, y1: 386, x2: 162, y2: 386 },
    { x1: 194, y1: 386, x2: 242, y2: 386 },
    { x1: 306, y1: 386, x2: 338, y2: 386 },
    { x1: 370, y1: 386, x2: 402, y2: 386 },
    { x1: 434, y1: 386, x2: 450, y2: 386 },
    { x1: 50, y1: 402, x2: 130, y2: 402 },
    { x1: 146, y1: 402, x2: 210, y2: 402 },
    { x1: 226, y1: 402, x2: 258, y2: 402 },
    { x1: 274, y1: 402, x2: 322, y2: 402 },
    { x1: 338, y1: 402, x2: 434, y2: 402 },
    { x1: 66, y1: 418, x2: 82, y2: 418 },
    { x1: 130, y1: 418, x2: 146, y2: 418 },
    { x1: 210, y1: 418, x2: 226, y2: 418 },
    { x1: 242, y1: 418, x2: 274, y2: 418 },
    { x1: 322, y1: 418, x2: 338, y2: 418 },
    { x1: 354, y1: 418, x2: 434, y2: 418 },
    { x1: 114, y1: 434, x2: 178, y2: 434 },
    { x1: 194, y1: 434, x2: 210, y2: 434 },
    { x1: 226, y1: 434, x2: 242, y2: 434 },
    { x1: 274, y1: 434, x2: 290, y2: 434 },
    { x1: 306, y1: 434, x2: 322, y2: 434 },
    { x1: 418, y1: 434, x2: 450, y2: 434 },
    { x1: 466, y1: 434, x2: 482, y2: 434 },
    { x1: 18, y1: 450, x2: 82, y2: 450 },
    { x1: 98, y1: 450, x2: 130, y2: 450 },
    { x1: 178, y1: 450, x2: 194, y2: 450 },
    { x1: 210, y1: 450, x2: 226, y2: 450 },
    { x1: 258, y1: 450, x2: 274, y2: 450 },
    { x1: 354, y1: 450, x2: 370, y2: 450 },
    { x1: 434, y1: 450, x2: 466, y2: 450 },
    { x1: 66, y1: 466, x2: 98, y2: 466 },
    { x1: 114, y1: 466, x2: 130, y2: 466 },
    { x1: 162, y1: 466, x2: 178, y2: 466 },
    { x1: 290, y1: 466, x2: 338, y2: 466 },
    { x1: 370, y1: 466, x2: 402, y2: 466 },
    { x1: 466, y1: 466, x2: 482, y2: 466 },
    { x1: 2, y1: 482, x2: 242, y2: 482 },
    { x1: 258, y1: 482, x2: 482, y2: 482 },
    { x1: 2, y1: 2, x2: 2, y2: 482 },
    { x1: 18, y1: 18, x2: 18, y2: 98 },
    { x1: 18, y1: 162, x2: 18, y2: 178 },
    { x1: 18, y1: 210, x2: 18, y2: 226 },
    { x1: 18, y1: 258, x2: 18, y2: 322 },
    { x1: 18, y1: 354, x2: 18, y2: 370 },
    { x1: 18, y1: 402, x2: 18, y2: 466 },
    { x1: 34, y1: 34, x2: 34, y2: 66 },
    { x1: 34, y1: 82, x2: 34, y2: 114 },
    { x1: 34, y1: 130, x2: 34, y2: 146 },
    { x1: 34, y1: 178, x2: 34, y2: 210 },
    { x1: 34, y1: 306, x2: 34, y2: 322 },
    { x1: 34, y1: 386, x2: 34, y2: 434 },
    { x1: 34, y1: 466, x2: 34, y2: 482 },
    { x1: 50, y1: 18, x2: 50, y2: 34 },
    { x1: 50, y1: 66, x2: 50, y2: 82 },
    { x1: 50, y1: 114, x2: 50, y2: 146 },
    { x1: 50, y1: 194, x2: 50, y2: 258 },
    { x1: 50, y1: 274, x2: 50, y2: 338 },
    { x1: 50, y1: 370, x2: 50, y2: 386 },
    { x1: 50, y1: 402, x2: 50, y2: 466 },
    { x1: 66, y1: 2, x2: 66, y2: 18 },
    { x1: 66, y1: 34, x2: 66, y2: 66 },
    { x1: 66, y1: 82, x2: 66, y2: 114 },
    { x1: 66, y1: 130, x2: 66, y2: 162 },
    { x1: 66, y1: 242, x2: 66, y2: 258 },
    { x1: 66, y1: 274, x2: 66, y2: 290 },
    { x1: 66, y1: 306, x2: 66, y2: 322 },
    { x1: 66, y1: 338, x2: 66, y2: 354 },
    { x1: 66, y1: 370, x2: 66, y2: 402 },
    { x1: 66, y1: 418, x2: 66, y2: 434 },
    { x1: 82, y1: 18, x2: 82, y2: 34 },
    { x1: 82, y1: 50, x2: 82, y2: 98 },
    { x1: 82, y1: 258, x2: 82, y2: 274 },
    { x1: 82, y1: 290, x2: 82, y2: 306 },
    { x1: 82, y1: 354, x2: 82, y2: 370 },
    { x1: 82, y1: 418, x2: 82, y2: 450 },
    { x1: 98, y1: 34, x2: 98, y2: 50 },
    { x1: 98, y1: 82, x2: 98, y2: 146 },
    { x1: 98, y1: 162, x2: 98, y2: 178 },
    { x1: 98, y1: 210, x2: 98, y2: 290 },
    { x1: 98, y1: 306, x2: 98, y2: 322 },
    { x1: 98, y1: 338, x2: 98, y2: 370 },
    { x1: 98, y1: 402, x2: 98, y2: 482 },
    { x1: 114, y1: 18, x2: 114, y2: 34 },
    { x1: 114, y1: 50, x2: 114, y2: 82 },
    { x1: 114, y1: 130, x2: 114, y2: 146 },
    { x1: 114, y1: 194, x2: 114, y2: 258 },
    { x1: 114, y1: 290, x2: 114, y2: 306 },
    { x1: 114, y1: 322, x2: 114, y2: 338 },
    { x1: 114, y1: 354, x2: 114, y2: 386 },
    { x1: 114, y1: 418, x2: 114, y2: 434 },
    { x1: 130, y1: 2, x2: 130, y2: 34 },
    { x1: 130, y1: 50, x2: 130, y2: 66 },
    { x1: 130, y1: 114, x2: 130, y2: 130 },
    { x1: 130, y1: 146, x2: 130, y2: 162 },
    { x1: 130, y1: 178, x2: 130, y2: 194 },
    { x1: 130, y1: 242, x2: 130, y2: 258 },
    { x1: 130, y1: 274, x2: 130, y2: 290 },
    { x1: 130, y1: 338, x2: 130, y2: 354 },
    { x1: 130, y1: 386, x2: 130, y2: 402 },
    { x1: 130, y1: 466, x2: 130, y2: 482 },
    { x1: 146, y1: 18, x2: 146, y2: 50 },
    { x1: 146, y1: 66, x2: 146, y2: 114 },
    { x1: 146, y1: 146, x2: 146, y2: 162 },
    { x1: 146, y1: 194, x2: 146, y2: 274 },
    { x1: 146, y1: 306, x2: 146, y2: 370 },
    { x1: 146, y1: 402, x2: 146, y2: 418 },
    { x1: 146, y1: 434, x2: 146, y2: 466 },
    { x1: 162, y1: 50, x2: 162, y2: 82 },
    { x1: 162, y1: 114, x2: 162, y2: 146 },
    { x1: 162, y1: 162, x2: 162, y2: 242 },
    { x1: 162, y1: 258, x2: 162, y2: 274 },
    { x1: 162, y1: 290, x2: 162, y2: 306 },
    { x1: 162, y1: 322, x2: 162, y2: 338 },
    { x1: 162, y1: 418, x2: 162, y2: 434 },
    { x1: 162, y1: 450, x2: 162, y2: 482 },
    { x1: 178, y1: 18, x2: 178, y2: 34 },
    { x1: 178, y1: 82, x2: 178, y2: 98 },
    { x1: 178, y1: 130, x2: 178, y2: 162 },
    { x1: 178, y1: 194, x2: 178, y2: 210 },
    { x1: 178, y1: 242, x2: 178, y2: 290 },
    { x1: 178, y1: 306, x2: 178, y2: 322 },
    { x1: 178, y1: 338, x2: 178, y2: 402 },
    { x1: 178, y1: 418, x2: 178, y2: 450 },
    { x1: 194, y1: 34, x2: 194, y2: 66 },
    { x1: 194, y1: 98, x2: 194, y2: 130 },
    { x1: 194, y1: 162, x2: 194, y2: 194 },
    { x1: 194, y1: 210, x2: 194, y2: 242 },
    { x1: 194, y1: 290, x2: 194, y2: 306 },
    { x1: 194, y1: 322, x2: 194, y2: 386 },
    { x1: 194, y1: 402, x2: 194, y2: 418 },
    { x1: 194, y1: 450, x2: 194, y2: 482 },
    { x1: 210, y1: 2, x2: 210, y2: 18 },
    { x1: 210, y1: 82, x2: 210, y2: 98 },
    { x1: 210, y1: 130, x2: 210, y2: 178 },
    { x1: 210, y1: 194, x2: 210, y2: 210 },
    { x1: 210, y1: 242, x2: 210, y2: 274 },
    { x1: 210, y1: 306, x2: 210, y2: 322 },
    { x1: 210, y1: 354, x2: 210, y2: 370 },
    { x1: 210, y1: 386, x2: 210, y2: 402 },
    { x1: 210, y1: 418, x2: 210, y2: 450 },
    { x1: 210, y1: 466, x2: 210, y2: 482 },
    { x1: 226, y1: 18, x2: 226, y2: 34 },
    { x1: 226, y1: 66, x2: 226, y2: 98 },
    { x1: 226, y1: 130, x2: 226, y2: 146 },
    { x1: 226, y1: 178, x2: 226, y2: 194 },
    { x1: 226, y1: 226, x2: 226, y2: 242 },
    { x1: 226, y1: 274, x2: 226, y2: 306 },
    { x1: 226, y1: 338, x2: 226, y2: 370 },
    { x1: 226, y1: 402, x2: 226, y2: 418 },
    { x1: 226, y1: 450, x2: 226, y2: 466 },
    { x1: 242, y1: 2, x2: 242, y2: 18 },
    { x1: 242, y1: 50, x2: 242, y2: 82 },
    { x1: 242, y1: 130, x2: 242, y2: 162 },
    { x1: 242, y1: 194, x2: 242, y2: 338 },
    { x1: 242, y1: 370, x2: 242, y2: 386 },
    { x1: 242, y1: 418, x2: 242, y2: 482 },
    { x1: 258, y1: 2, x2: 258, y2: 18 },
    { x1: 258, y1: 34, x2: 258, y2: 50 },
    { x1: 258, y1: 66, x2: 258, y2: 98 },
    { x1: 258, y1: 114, x2: 258, y2: 146 },
    { x1: 258, y1: 178, x2: 258, y2: 194 },
    { x1: 258, y1: 210, x2: 258, y2: 226 },
    { x1: 258, y1: 258, x2: 258, y2: 274 },
    { x1: 258, y1: 290, x2: 258, y2: 322 },
    { x1: 258, y1: 354, x2: 258, y2: 402 },
    { x1: 258, y1: 434, x2: 258, y2: 482 },
    { x1: 274, y1: 18, x2: 274, y2: 66 },
    { x1: 274, y1: 114, x2: 274, y2: 146 },
    { x1: 274, y1: 194, x2: 274, y2: 210 },
    { x1: 274, y1: 274, x2: 274, y2: 290 },
    { x1: 274, y1: 338, x2: 274, y2: 354 },
    { x1: 274, y1: 370, x2: 274, y2: 434 },
    { x1: 274, y1: 450, x2: 274, y2: 466 },
    { x1: 290, y1: 2, x2: 290, y2: 18 },
    { x1: 290, y1: 50, x2: 290, y2: 130 },
    { x1: 290, y1: 146, x2: 290, y2: 178 },
    { x1: 290, y1: 194, x2: 290, y2: 226 },
    { x1: 290, y1: 258, x2: 290, y2: 274 },
    { x1: 290, y1: 322, x2: 290, y2: 402 },
    { x1: 290, y1: 418, x2: 290, y2: 466 },
    { x1: 306, y1: 18, x2: 306, y2: 50 },
    { x1: 306, y1: 98, x2: 306, y2: 146 },
    { x1: 306, y1: 162, x2: 306, y2: 194 },
    { x1: 306, y1: 210, x2: 306, y2: 258 },
    { x1: 306, y1: 402, x2: 306, y2: 418 },
    { x1: 306, y1: 450, x2: 306, y2: 466 },
    { x1: 322, y1: 18, x2: 322, y2: 114 },
    { x1: 322, y1: 130, x2: 322, y2: 210 },
    { x1: 322, y1: 306, x2: 322, y2: 338 },
    { x1: 322, y1: 354, x2: 322, y2: 386 },
    { x1: 322, y1: 418, x2: 322, y2: 450 },
    { x1: 338, y1: 18, x2: 338, y2: 50 },
    { x1: 338, y1: 98, x2: 338, y2: 178 },
    { x1: 338, y1: 290, x2: 338, y2: 306 },
    { x1: 338, y1: 322, x2: 338, y2: 370 },
    { x1: 338, y1: 386, x2: 338, y2: 466 },
    { x1: 354, y1: 2, x2: 354, y2: 66 },
    { x1: 354, y1: 130, x2: 354, y2: 146 },
    { x1: 354, y1: 210, x2: 354, y2: 338 },
    { x1: 354, y1: 370, x2: 354, y2: 386 },
    { x1: 354, y1: 418, x2: 354, y2: 482 },
    { x1: 370, y1: 2, x2: 370, y2: 18 },
    { x1: 370, y1: 50, x2: 370, y2: 82 },
    { x1: 370, y1: 114, x2: 370, y2: 178 },
    { x1: 370, y1: 210, x2: 370, y2: 226 },
    { x1: 370, y1: 242, x2: 370, y2: 258 },
    { x1: 370, y1: 290, x2: 370, y2: 322 },
    { x1: 370, y1: 338, x2: 370, y2: 386 },
    { x1: 370, y1: 418, x2: 370, y2: 434 },
    { x1: 386, y1: 18, x2: 386, y2: 34 },
    { x1: 386, y1: 50, x2: 386, y2: 66 },
    { x1: 386, y1: 82, x2: 386, y2: 98 },
    { x1: 386, y1: 178, x2: 386, y2: 210 },
    { x1: 386, y1: 226, x2: 386, y2: 242 },
    { x1: 386, y1: 258, x2: 386, y2: 290 },
    { x1: 386, y1: 322, x2: 386, y2: 338 },
    { x1: 386, y1: 354, x2: 386, y2: 370 },
    { x1: 386, y1: 434, x2: 386, y2: 466 },
    { x1: 402, y1: 34, x2: 402, y2: 50 },
    { x1: 402, y1: 66, x2: 402, y2: 146 },
    { x1: 402, y1: 162, x2: 402, y2: 194 },
    { x1: 402, y1: 210, x2: 402, y2: 226 },
    { x1: 402, y1: 242, x2: 402, y2: 258 },
    { x1: 402, y1: 338, x2: 402, y2: 354 },
    { x1: 402, y1: 418, x2: 402, y2: 466 },
    { x1: 418, y1: 34, x2: 418, y2: 82 },
    { x1: 418, y1: 98, x2: 418, y2: 130 },
    { x1: 418, y1: 146, x2: 418, y2: 178 },
    { x1: 418, y1: 194, x2: 418, y2: 306 },
    { x1: 418, y1: 354, x2: 418, y2: 402 },
    { x1: 418, y1: 434, x2: 418, y2: 482 },
    { x1: 434, y1: 18, x2: 434, y2: 34 },
    { x1: 434, y1: 82, x2: 434, y2: 98 },
    { x1: 434, y1: 130, x2: 434, y2: 178 },
    { x1: 434, y1: 194, x2: 434, y2: 226 },
    { x1: 434, y1: 274, x2: 434, y2: 290 },
    { x1: 434, y1: 306, x2: 434, y2: 322 },
    { x1: 434, y1: 338, x2: 434, y2: 386 },
    { x1: 434, y1: 450, x2: 434, y2: 466 },
    { x1: 450, y1: 18, x2: 450, y2: 66 },
    { x1: 450, y1: 82, x2: 450, y2: 114 },
    { x1: 450, y1: 162, x2: 450, y2: 194 },
    { x1: 450, y1: 258, x2: 450, y2: 274 },
    { x1: 450, y1: 290, x2: 450, y2: 306 },
    { x1: 450, y1: 386, x2: 450, y2: 434 },
    { x1: 450, y1: 466, x2: 450, y2: 482 },
    { x1: 466, y1: 66, x2: 466, y2: 82 },
    { x1: 466, y1: 114, x2: 466, y2: 130 },
    { x1: 466, y1: 178, x2: 466, y2: 290 },
    { x1: 466, y1: 306, x2: 466, y2: 322 },
    { x1: 466, y1: 338, x2: 466, y2: 354 },
    { x1: 466, y1: 370, x2: 466, y2: 418 },
    { x1: 466, y1: 434, x2: 466, y2: 450 },
    { x1: 482, y1: 2, x2: 482, y2: 482 }
];

const canvas = document.getElementById("labirint_canvas");
const ctx = canvas.getContext("2d");
const scale = 784 / 484;
function generateMaze() {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < mazeCoordinates.length; i++) {
        const { x1, y1, x2, y2 } = mazeCoordinates[i];
        ctx.moveTo(x1 * scale, y1 * scale);
        ctx.lineTo(x2 * scale, y2 * scale);
    }
    ctx.stroke();
}
generateMaze();

let x = 0;
let y = 1;
let crta = 0;
let animating;

function drawSolution() {
    const coordinates = [
        [234 * scale, 2 * scale], [234 * scale, 10 * scale], [218 * scale, 10 * scale], [218 * scale, 26 * scale], [186 * scale, 26 * scale], [186 * scale, 10 * scale], [138 * scale, 10 * scale], [138 * scale, 42 * scale], [106 * scale, 42 * scale], [106 * scale, 26 * scale],
        [90 * scale, 26 * scale], [90 * scale, 42 * scale], [74 * scale, 42 * scale], [74 * scale, 74 * scale], [58 * scale, 74 * scale], [58 * scale, 58 * scale], [42 * scale, 58 * scale], [42 * scale, 90 * scale], [58 * scale, 90 * scale], [58 * scale, 106 * scale],
        [42 * scale, 106 * scale], [42 * scale, 122 * scale], [10 * scale, 122 * scale], [10 * scale, 138 * scale], [26 * scale, 138 * scale], [26 * scale, 154 * scale], [58 * scale, 154 * scale], [58 * scale, 122 * scale], [90 * scale, 122 * scale],
        [90 * scale, 138 * scale], [74 * scale, 138 * scale], [74 * scale, 154 * scale], [122 * scale, 154 * scale], [122 * scale, 138 * scale], [154 * scale, 138 * scale], [154 * scale, 122 * scale], [138 * scale, 122 * scale], [138 * scale, 106 * scale],
        [106 * scale, 106 * scale], [106 * scale, 90 * scale], [122 * scale, 90 * scale], [122 * scale, 74 * scale], [138 * scale, 74 * scale], [138 * scale, 58 * scale], [154 * scale, 58 * scale], [154 * scale, 90 * scale], [170 * scale, 90 * scale],
        [170 * scale, 74 * scale], [218 * scale, 74 * scale], [218 * scale, 58 * scale], [202 * scale, 58 * scale], [202 * scale, 42 * scale], [250 * scale, 42 * scale], [250 * scale, 58 * scale], [266 * scale, 58 * scale], [266 * scale, 74 * scale],
        [282 * scale, 74 * scale], [282 * scale, 42 * scale], [298 * scale, 42 * scale], [298 * scale, 58 * scale], [314 * scale, 58 * scale], [314 * scale, 74 * scale], [298 * scale, 74 * scale], [298 * scale, 90 * scale], [314 * scale, 90 * scale],
        [314 * scale, 122 * scale], [330 * scale, 122 * scale], [330 * scale, 186 * scale], [378 * scale, 186 * scale], [378 * scale, 170 * scale], [394 * scale, 170 * scale], [394 * scale, 202 * scale], [410 * scale, 202 * scale],
        [410 * scale, 234 * scale], [394 * scale, 234 * scale], [394 * scale, 250 * scale], [378 * scale, 250 * scale], [378 * scale, 234 * scale], [362 * scale, 234 * scale], [362 * scale, 266 * scale], [378 * scale, 266 * scale],
        [378 * scale, 282 * scale], [362 * scale, 282 * scale], [362 * scale, 330 * scale], [378 * scale, 330 * scale], [378 * scale, 346 * scale], [394 * scale, 346 * scale], [394 * scale, 362 * scale], [410 * scale, 362 * scale],
        [410 * scale, 346 * scale], [426 * scale, 346 * scale], [426 * scale, 394 * scale], [442 * scale, 394 * scale], [442 * scale, 410 * scale], [346 * scale, 410 * scale], [346 * scale, 474 * scale], [282 * scale, 474 * scale],
        [282 * scale, 442 * scale], [266 * scale, 442 * scale], [266 * scale, 426 * scale], [250 * scale, 426 * scale], [250 * scale, 482 * scale]
    ];
    animating = true;
    const canvas = document.getElementById("labirint_canvas");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 11;
    ctx.lineCap = "round";

    if (x < coordinates.length - 1) {

        const startX = coordinates[x][0];
        const startY = coordinates[x][1];
        const endX = coordinates[x + 1][0];
        const endY = coordinates[x + 1][1];

        const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

        crta += 1 / dolzinaCrte;

        if (crta > 1) crta = 1;

        const vmesx = startX + (endX - startX) * crta;
        const vmesy = startY + (endY - startY) * crta;

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(vmesx, vmesy);
        ctx.stroke();
        ctx.closePath();

        // Draw a small square at the start point
        // ctx.fillStyle = "rgb(255, 255, 255)";
        // ctx.fillRect(startX - ctx.lineWidth / 2, startY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

        if (crta >= 1) {
            x++;
            crta = 0;
        }

        requestAnimationFrame(drawSolution);
    } else {
        animating = false;
    }
}

const spaceman = new Image();
spaceman.src = "../img/astronaut.png";

function spaceMan() {
    ctx.drawImage(spaceman, 226*scale, 2*scale, 26, 26);
}
spaceman.onload = function () {
    spaceMan();
}
const draw = document.getElementById("click1");
const clear = document.getElementById("click2");

draw.addEventListener("click", function () { // ko kliknemo gumb, se sproži funkcija drawSolution
    drawSolution();
});

clear.addEventListener("click", function () { // ko kliknemo gumb, se sproži funkcija drawSolution
    clearSolution();
});
function clearSolution() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    generateMaze();
    spaceman.onload();
}