/****************************************************/
/* ELEMENTOS DEL VIAJE */
/****************************************************/
const viewerCroacia = document.getElementById("mediaViewerCroacia");
const prevBtnCroacia = document.getElementById("prevBtnCroacia");
const nextBtnCroacia = document.getElementById("nextBtnCroacia");
const mediaIndexCroacia = document.getElementById("mediaIndexCroacia");
const totalMediaCroacia = document.getElementById("totalMediaCroacia");
const loaderCroacia = document.getElementById("loaderCroacia");
let currentMediaCroacia = 0;
let pendingImageCroacia = null;

/****************************************************/
/* DATOS DEL VIAJE */
/****************************************************/
const viajeCroacia = {
  nombre: "Croacia",
  medios: [
    { type: "image", src: "https://i.postimg.cc/L8dSf6GL/IMG-20260829-182218-024.webp"},
    { type: "image", src: "https://i.postimg.cc/8z8GWPxL/IMG-20260829-182657-297.webp"},
    { type: "video", src: "https://streamable.com/e/nn3c0o"},
    { type: "image", src: "https://i.postimg.cc/9FsmpBwm/IMG-20260829-183951-622.jpg"},
    { type: "image", src: "https://i.postimg.cc/SR76rKDR/IMG-20260829-185044-371.jpg"},
    { type: "video", src: "https://streamable.com/e/ypi6ve"},
    { type: "image", src: "https://i.postimg.cc/2yFQw52V/IMG-20260829-193145-908.webp"},
    { type: "image", src: "https://i.postimg.cc/L5BtTsNX/IMG-20260829-193336-191.webp"},
    { type: "image", src: "https://i.postimg.cc/yYD9xvzW/IMG-20260829-193526-017.jpg"},
    { type: "image", src: "https://i.postimg.cc/TYBd9c52/IMG-20260829-193748-831.webp"},
    { type: "image", src: "https://i.postimg.cc/Xqcf8vQv/IMG-20260829-193919-542.webp"},
    { type: "image", src: "https://i.postimg.cc/t40bPC86/IMG-20260829-194322-038.jpg"},
    { type: "video", src: "https://streamable.com/e/u0y72g"},
    { type: "video", src: "https://streamable.com/e/xabadl"},
    { type: "image", src: "https://i.postimg.cc/26jdm57k/IMG-20260830-141728-463.jpg"},
    { type: "image", src: "https://i.postimg.cc/j5q6Kj4b/IMG-20260830-142002-995.jpg"},
    { type: "image", src: "https://i.postimg.cc/76P1DLnw/IMG-20260830-143239-547.webp"},
    { type: "image", src: "https://i.postimg.cc/SsQLqKfm/IMG-20260830-143425-123.webp"},
    { type: "image", src: "https://i.postimg.cc/j5q6Kj4K/IMG-20260830-143750-030.webp"},
    { type: "video", src: "https://streamable.com/e/dplpos"},
    { type: "image", src: "https://i.postimg.cc/tTL3KGD6/IMG-20260830-144513-849.jpg"},
    { type: "image", src: "https://i.postimg.cc/fL6cGQ5m/IMG-20260830-144613-197.webp"},
    { type: "image", src: "https://i.postimg.cc/1tg0730w/IMG-20260830-144929-200.jpg"},
    { type: "image", src: "https://i.postimg.cc/hjHLkRMz/IMG-20260830-145018-237.webp"},
    { type: "image", src: "https://i.postimg.cc/sXBPHgPP/IMG-20260830-145355-518.webp"},
    { type: "image", src: "https://i.postimg.cc/LXrtcFvJ/IMG-20260830-145630-010.webp"},
    { type: "image", src: "https://i.postimg.cc/B6857n5D/IMG-20260830-150308-317.jpg"},
    { type: "image", src: "https://i.postimg.cc/hjJ8Zt8V/IMG-20260830-150527-143.webp"},
    { type: "image", src: "https://i.postimg.cc/W3DmY1mM/IMG-20260830-150629-993.webp"},
    { type: "image", src: "https://i.postimg.cc/WbSDrPrS/IMG-20260830-154857-115.webp"},
    { type: "image", src: "https://i.postimg.cc/vHX19d9h/IMG-20260830-155224-658.webp"},
    { type: "image", src: "https://i.postimg.cc/GhzBY1YQ/IMG-20260830-155825-266.jpg"},
    { type: "image", src: "https://i.postimg.cc/SNVX8p8G/IMG-20260830-155958-428.jpg"},
    { type: "video", src: "https://streamable.com/e/u6a1oa"},
    { type: "video", src: "https://streamable.com/e/zka3hk"},
    { type: "image", src: "https://i.postimg.cc/B6g3yJJM/IMG-20260830-161248-786.webp"},
    { type: "image", src: "https://i.postimg.cc/k499f2Pz/IMG-20260830-161419-208.jpg"},
    { type: "image", src: "https://i.postimg.cc/26wYJCCT/IMG-20260830-161502-517.webp"},
    { type: "video", src: "https://streamable.com/e/um3uty"},
    { type: "video", src: "https://streamable.com/e/d5fby5"},
    { type: "image", src: "https://i.postimg.cc/yYCy19Cg/IMG-20260830-170146-544.webp"},
    { type: "video", src: "https://streamable.com/e/bdlwwb"},
    { type: "image", src: "https://i.postimg.cc/vTr9gqwL/IMG-20260830-170528-799.webp"},
    { type: "image", src: "https://i.postimg.cc/FzycdWXb/IMG-20260830-170717-819.webp"},
    { type: "video", src: "https://streamable.com/e/kq6ltt"},
    { type: "video", src: "https://streamable.com/e/o21rap"},
    { type: "video", src: "https://streamable.com/e/9d5wcd"},
    { type: "video", src: "https://streamable.com/e/r4c3tl"},
    { type: "image", src: "https://i.postimg.cc/fbQN5BGS/IMG-20260830-172349-524.webp"},
    { type: "image", src: "https://i.postimg.cc/q7HTQjPC/IMG-20260830-172622-903.webp"},
    { type: "image", src: "https://i.postimg.cc/VNP84DxC/IMG-20260830-172659-730.webp"},
    { type: "video", src: "https://streamable.com/e/4pgcll"},
    { type: "video", src: "https://streamable.com/e/jiffs7"},
    { type: "video", src: "https://streamable.com/e/4nwa5x"},
    { type: "image", src: "https://i.postimg.cc/FscmSMqh/IMG-20260830-173505-223.webp"},
    { type: "image", src: "https://i.postimg.cc/mgysXQB0/IMG-20260830-173704-429.webp"},
    { type: "image", src: "https://i.postimg.cc/K8D2qnxC/IMG-20260830-173738-256.webp"},
    { type: "image", src: "https://i.postimg.cc/Z5xS7r42/IMG-20260830-173811-099.webp"},
    { type: "video", src: "https://streamable.com/e/47h9og"},
    { type: "image", src: "https://i.postimg.cc/pXQ4RR4L/IMG-20260830-174339-408.webp"},
    { type: "video", src: "https://streamable.com/e/70cbpt"},
    { type: "image", src: "https://i.postimg.cc/dt9HgnZ6/IMG-20260830-174738-346.webp"},
    { type: "video", src: "https://streamable.com/e/babsrn"},
    { type: "video", src: "https://streamable.com/e/gxn1bd"},
    { type: "video", src: "https://streamable.com/e/r4w8ey"},
    { type: "image", src: "https://i.postimg.cc/VNPJM9Dc/IMG-20260830-180633-649.jpg"},
    { type: "image", src: "https://i.postimg.cc/d0RL97Sp/IMG-20260830-180829-590.webp"},
    { type: "video", src: "https://streamable.com/e/v0w0yt"},
    { type: "image", src: "https://i.postimg.cc/br4yP8BT/IMG-20260830-181206-215.jpg"},
    { type: "image", src: "https://i.postimg.cc/8cxpGD04/IMG-20260830-181704-151.webp"},
    { type: "image", src: "https://i.postimg.cc/ZnXbmZMj/IMG-20260830-181737-909.webp"},
    { type: "video", src: "https://streamable.com/e/rot57x"},
    { type: "image", src: "https://i.postimg.cc/ry4FGRR6/IMG-20260830-182507-906.jpg"},
    { type: "image", src: "https://i.postimg.cc/h4mP8QzH/IMG-20260830-182725-936.jpg"},
    { type: "image", src: "https://i.postimg.cc/9X9FPwR6/IMG-20260830-182844-114.webp"},
    { type: "image", src: "https://i.postimg.cc/G3DhPT86/IMG-20260830-182934-122.jpg"},
    { type: "video", src: "https://streamable.com/e/a8q4gd"},
    { type: "image", src: "https://i.postimg.cc/ZqbpPHfW/IMG-20260830-220114-857.webp"},
    { type: "image", src: "https://i.postimg.cc/nLFBK2dM/IMG-20260830-220409-129.webp"},
    { type: "image", src: "https://i.postimg.cc/9fmZPbxm/IMG-20260830-220509-411.webp"},
    { type: "image", src: "https://i.postimg.cc/KYGB7f9v/IMG-20260830-220731-658.webp"},
    { type: "image", src: "https://i.postimg.cc/d0srR6WV/IMG-20260830-220958-628.webp"},
    { type: "image", src: "https://i.postimg.cc/fbzm7CHb/IMG-20260830-221700-668.webp"},
    { type: "video", src: "https://streamable.com/e/r5d814"},
    { type: "image", src: "https://i.postimg.cc/qMHwF9Q2/IMG-20260830-221927-064.webp"},
    { type: "image", src: "https://i.postimg.cc/RCHGXM17/IMG-20260903-175348-889.jpg"},
    { type: "image", src: "https://i.postimg.cc/021n4LZD/IMG-20260903-175651-586.webp"},
    { type: "image", src: "https://i.postimg.cc/yYCjGwnS/IMG-20260903-175819-069.webp"},
    { type: "image", src: "https://i.postimg.cc/J4CxF9Ky/IMG-20260903-175936-892.webp"},
    { type: "image", src: "https://i.postimg.cc/kMbwfnNv/IMG-20260903-180123-166.webp"},
    { type: "image", src: "https://i.postimg.cc/pXMCSgkh/IMG-20260903-180317-285.webp"},
    { type: "image", src: "https://i.postimg.cc/vm45Tz3b/IMG-20260903-180432-159.webp"},
    { type: "video", src: "https://streamable.com/e/q7c9oh"},
    { type: "image", src: "https://i.postimg.cc/7ZWTFzw6/IMG-20260903-180837-919.webp"},
    { type: "image", src: "https://i.postimg.cc/Hkh7qMdj/IMG-20260903-181205-946.webp"},
    { type: "video", src: "https://streamable.com/e/rsojgg"},
    { type: "image", src: "https://i.postimg.cc/SNQ2jdKR/IMG-20260903-181503-873.webp"},
    { type: "video", src: "https://streamable.com/e/k6l76w"},
    { type: "image", src: "https://i.postimg.cc/vHjYMtgS/IMG-20260903-181818-637.webp"},
    { type: "video", src: "https://streamable.com/e/nyr0cx"},
    { type: "image", src: "https://i.postimg.cc/HsJmS8Zs/IMG-20260903-182018-552.jpg"},
    { type: "image", src: "https://i.postimg.cc/9XgVtYpw/IMG-20260903-182618-794.jpg"},
    { type: "video", src: "https://streamable.com/e/lllsv5"},
    { type: "video", src: "https://streamable.com/e/cfin77"},
    { type: "video", src: "https://streamable.com/e/9u4z6r"},
    { type: "image", src: "https://i.postimg.cc/c1kZMBmC/IMG-20260903-183745-612.webp"},
    { type: "image", src: "https://i.postimg.cc/DfpFdPgv/IMG-20260903-183826-377.webp"},
    { type: "image", src: "https://i.postimg.cc/qBD0XxLp/IMG-20260903-184033-357.webp"},
    { type: "video", src: "https://streamable.com/e/7gg4fp"},
    { type: "video", src: "https://streamable.com/e/jzn05s"},
    { type: "video", src: "https://streamable.com/e/w04mpt"},
    { type: "image", src: "https://i.postimg.cc/QNYskJqR/IMG-20260903-185510-904.webp"},
    { type: "image", src: "https://i.postimg.cc/NGCY7kx3/IMG-20260903-185709-432.webp"},
    { type: "video", src: "https://streamable.com/e/iexwrk"},
    { type: "video", src: "https://streamable.com/e/2t0vpj"},
    { type: "image", src: "https://i.postimg.cc/v82MLtvK/IMG-20260903-190406-259.jpg"},
    { type: "image", src: "https://i.postimg.cc/qBD0XxGS/IMG-20260903-190445-041.webp"},
    { type: "video", src: "https://streamable.com/e/8uevmf"},
    { type: "video", src: "https://streamable.com/e/ujpb93"},
    { type: "video", src: "https://streamable.com/e/3jofy7"},
    { type: "image", src: "https://i.postimg.cc/qRPFYvMy/IMG-20260903-204000-329.webp"},
    { type: "image", src: "https://i.postimg.cc/pXYSGxN9/IMG-20260903-204056-889.webp"},
    { type: "image", src: "https://i.postimg.cc/28Ftcmpb/IMG-20260903-204400-095.webp"},
    { type: "image", src: "https://i.postimg.cc/Wb6yWjRq/IMG-20260903-204902-024.webp"},
    { type: "video", src: "https://streamable.com/e/duqueh"},
    { type: "image", src: "https://i.postimg.cc/mrc8sWny/IMG-20260903-205715-266.webp"},
    { type: "image", src: "https://i.postimg.cc/HLJBg1N4/IMG-20260903-205828-556.webp"},
    { type: "image", src: "https://i.postimg.cc/R03XBxY1/IMG-20260903-210013-253.webp"},
    { type: "video", src: "https://streamable.com/e/5xcpp2"},
    { type: "image", src: "https://i.postimg.cc/tJ937KBm/IMG-20260903-210849-090.webp"},
    { type: "video", src: "https://streamable.com/e/kchx8s"},
    { type: "video", src: "https://streamable.com/e/f6bq0z"},
    { type: "image", src: "https://i.postimg.cc/nL8QX8zN/IMG-20260903-211652-353.webp"},
    { type: "image", src: "https://i.postimg.cc/CKyfRy1c/IMG-20260903-211728-371.webp"},
    { type: "image", src: "https://i.postimg.cc/pdNnmNTZ/IMG-20260903-212118-952.jpg"},
    { type: "image", src: "https://i.postimg.cc/BnPKZZqm/IMG-20260903-212324-863.webp"},
    { type: "image", src: "https://i.postimg.cc/cLtn11sX/IMG-20260903-212407-890.webp"},
    { type: "image", src: "https://i.postimg.cc/kgRbMMnj/IMG-20260903-212455-374.webp"},
    { type: "image", src: "https://i.postimg.cc/4xH944J1/IMG-20260903-212542-373.webp"},
    { type: "image", src: "https://i.postimg.cc/Vvpm68RH/IMG-20260903-224923-076.jpg"},
    { type: "video", src: "https://streamable.com/e/lruwyu"},
    { type: "video", src: "https://streamable.com/e/omvn0l"},
    { type: "video", src: "https://streamable.com/e/8yvb75"},
    { type: "video", src: "https://streamable.com/e/479ir3"},
    { type: "video", src: "https://streamable.com/e/ww9bjv"},
    { type: "video", src: "https://streamable.com/e/wwkgh8"},
    { type: "image", src: "https://i.postimg.cc/ZKvJQWbg/IMG-20260903-225814-291.webp"},
    { type: "video", src: "https://streamable.com/e/h7qtx3"},
    { type: "video", src: "https://streamable.com/e/gd00in"},
    { type: "image", src: "https://i.postimg.cc/NFHP69m2/IMG-20260903-220233-723.webp"},
    { type: "image", src: "https://i.postimg.cc/6qv1r2n2/IMG-20260903-231059-842.webp"},
    { type: "video", src: "https://streamable.com/e/ryi89b"},
    { type: "image", src: "https://i.postimg.cc/nrDw4jBC/IMG-20260903-231858-985.webp"},
    { type: "image", src: "https://i.postimg.cc/nrDw4jBs/IMG-20260903-231945-667.webp"},
    { type: "image", src: "https://i.postimg.cc/L510tYLJ/IMG-20260903-232231-104.webp"},
    { type: "image", src: "https://i.postimg.cc/L510tYLh/IMG-20260903-232638-458.webp"},
    { type: "image", src: "https://i.postimg.cc/pVhJb8sF/IMG-20260904-164551-665.jpg"},
    { type: "image", src: "https://i.postimg.cc/jqw40NMJ/IMG-20260904-164842-388.jpg"},
    { type: "image", src: "https://i.postimg.cc/447QktWc/IMG-20260905-140817-104.jpg"},
    { type: "image", src: "https://i.postimg.cc/bwCZwVJ2/IMG-20260905-141129-507.jpg"},
    { type: "image", src: "https://i.postimg.cc/SxTnx1s9/IMG-20260905-141952-459.webp"},
    { type: "image", src: "https://i.postimg.cc/sg6MgHX7/IMG-20260905-142152-626.webp"},
    { type: "image", src: "https://i.postimg.cc/mgXPgpDz/IMG-20260905-142234-222.jpg"},
    { type: "video", src: "https://streamable.com/e/pz0yjm"},
    { type: "image", src: "https://i.postimg.cc/s25CN1tB/IMG-20260905-142627-085.webp"},
    { type: "image", src: "https://i.postimg.cc/6QCxmTDy/IMG-20260905-142912-699.jpg"},
    { type: "image", src: "https://i.postimg.cc/hGVR5hHX/IMG-20260905-143107-289.webp"},
    { type: "image", src: "https://i.postimg.cc/m2qxZQ4P/IMG-20260905-143405-473.webp"},
    { type: "image", src: "https://i.postimg.cc/ZKgkYrmC/IMG-20260905-143631-232.jpg"},
    { type: "video", src: "https://streamable.com/e/6ldzz8"},
    { type: "image", src: "https://i.postimg.cc/m2Pqnt9x/IMG-20260905-184452-882.webp"},
    { type: "image", src: "https://i.postimg.cc/vH4jKcVC/IMG-20260905-184757-154.webp"},
    { type: "image", src: "https://i.postimg.cc/bNZM5stM/IMG-20260905-184907-785.jpg"},
    { type: "image", src: "https://i.postimg.cc/TYKSspDz/IMG-20260905-185247-929.webp"},
    { type: "image", src: "https://i.postimg.cc/Kv1VWRMw/IMG-20260905-185342-705.webp"},
    { type: "image", src: "https://i.postimg.cc/BZR94T4S/IMG-20260905-185836-233.jpg"},
    { type: "video", src: "https://streamable.com/e/zegnzz"},
    { type: "image", src: "https://i.postimg.cc/L4GK2t2h/IMG-20260905-190135-479.webp"},
    { type: "image", src: "https://i.postimg.cc/DfRknrny/IMG-20260905-190422-702.webp"},
    { type: "image", src: "https://i.postimg.cc/Y2TKM6MB/IMG-20260905-190643-995.webp"},
    { type: "image", src: "https://i.postimg.cc/ZYXt484t/IMG-20260905-190924-544.webp"},
    { type: "image", src: "https://i.postimg.cc/ry7XM1ML/IMG-20260905-191026-998.webp"},
    { type: "image", src: "https://i.postimg.cc/c1Py0R0S/IMG-20260905-191312-167.webp"},
    { type: "video", src: "https://streamable.com/e/0s6vb2"},
    { type: "video", src: "https://streamable.com/e/us8vu9"},
    { type: "image", src: "https://i.postimg.cc/4xL1R5RW/IMG-20260905-192408-322.webp"},
    { type: "image", src: "https://i.postimg.cc/bwCRfTf3/IMG-20260905-192549-569.webp"},
    { type: "video", src: "https://streamable.com/e/289sp0"},
    { type: "video", src: "https://streamable.com/e/k96jw5"},
    { type: "image", src: "https://i.postimg.cc/kXjS2gYn/IMG-20260905-192649-701.webp"},
    { type: "image", src: "https://i.postimg.cc/fTHdVRqz/IMG-20260905-193321-727.webp"},
    { type: "image", src: "https://i.postimg.cc/BQhFjn7J/IMG-20260905-193456-087.jpg"},
    { type: "video", src: "https://streamable.com/e/zsn5gh"},
    { type: "image", src: "https://i.postimg.cc/sD2QCRfC/IMG-20260905-194113-989.webp"},
    { type: "video", src: "https://streamable.com/e/t3hm44"},
    { type: "video", src: "https://streamable.com/e/wowfxg" },
    { type: "image", src: "https://i.postimg.cc/L52rRzbM/IMG-20260906-104649-561.webp"},
    { type: "image", src: "https://i.postimg.cc/tJpLyhMG/IMG-20260906-105623-537.webp"},
    { type: "video", src: "https://streamable.com/e/6m3xsz"},
    { type: "image", src: "https://i.postimg.cc/vTbpMWNF/IMG-20260906-110052-254.webp"},
    { type: "image", src: "https://i.postimg.cc/Y0MJk1sc/IMG-20260906-110230-227.webp"},
    { type: "image", src: "https://i.postimg.cc/MTyhhsdZ/IMG-20260906-110350-118.jpg"},
    { type: "video", src: "https://streamable.com/e/xhvk84"},
    { type: "video", src: "https://streamable.com/e/aooj9t"},
    { type: "image", src: "https://i.postimg.cc/WzNfxsdX/IMG-20260906-110632-077.jpg"},
    { type: "video", src: "https://streamable.com/e/y3buw2"},
    { type: "video", src: "https://streamable.com/e/y4r9ju"},
    { type: "video", src: "https://streamable.com/e/xbw5yo"},
    { type: "image", src: "https://i.postimg.cc/dVsN1snv/IMG-20260906-112344-156.jpg"},
    { type: "image", src: "https://i.postimg.cc/t4BSnKvc/IMG-20260906-112525-143.webp"},
    { type: "image", src: "https://i.postimg.cc/y81pd1nK/IMG-20260906-112645-729.webp"},
    { type: "image", src: "https://i.postimg.cc/nh3R9ySP/IMG-20260906-113438-056.webp"},
    { type: "image", src: "https://i.postimg.cc/Qd8Yt8SZ/IMG-20260906-113729-040.jpg"},
    { type: "video", src: "https://streamable.com/e/7nzu3h"},
    { type: "image", src: "https://i.postimg.cc/CKZNBzqj/IMG-20260906-114104-116.webp"},
    { type: "video", src: "https://streamable.com/e/s31qhs"},
    { type: "video", src: "https://streamable.com/e/7n8tyg"},
    { type: "image", src: "https://i.postimg.cc/gj01n3vn/IMG-20260906-154750-502.jpg"},
    { type: "image", src: "https://i.postimg.cc/HnLFVbQr/IMG-20260906-155310-737.webp"},
    { type: "video", src: "https://streamable.com/e/0ul7eq"},
    { type: "video", src: "https://streamable.com/e/9ejdwy"},
    { type: "image", src: "https://i.postimg.cc/Nf3Pw3P8/IMG-20260906-160725-094.webp"},
    { type: "image", src: "https://i.postimg.cc/3x2frtPk/IMG-20260906-160842-545.webp"},
    { type: "image", src: "https://i.postimg.cc/Sxc1QgwX/IMG-20260906-160925-221.webp"},
    { type: "video", src: "https://streamable.com/e/kzj5n3"},
    { type: "video", src: "https://streamable.com/e/sjc9gj"},
    { type: "video", src: "https://streamable.com/e/i92jae"},
    { type: "video", src: "https://streamable.com/e/awfa1a"},
    { type: "image", src: "https://i.postimg.cc/W4by9MHd/IMG-20260906-161823-367.jpg"},
    { type: "image", src: "https://i.postimg.cc/wBTrWhGy/IMG-20260906-162046-365.jpg"},
    { type: "image", src: "https://i.postimg.cc/9fFkxGn4/IMG-20260906-162326-146.jpg"},
    { type: "video", src: "https://streamable.com/e/nmydy8"},
    { type: "video", src: "https://streamable.com/e/w7fa5m"},
    { type: "video", src: "https://streamable.com/e/fcj550"},
    { type: "image", src: "https://i.postimg.cc/dtjnzhdp/IMG-20260906-164638-926.jpg"},
    { type: "image", src: "https://i.postimg.cc/rFNgvDWv/IMG-20260906-164736-719.webp"},
    { type: "video", src: "https://streamable.com/e/jzi8r5"},
    { type: "image", src: "https://i.postimg.cc/Hsd94TK8/IMG-20260906-165025-302.jpg"},
    { type: "video", src: "https://streamable.com/e/ml79xq"},
    { type: "video", src: "https://streamable.com/e/8n34ly"},
    { type: "video", src: "https://streamable.com/e/2d9fqk"},
    { type: "image", src: "https://i.postimg.cc/WpnkVgWh/IMG-20260906-170812-154.webp"},
    { type: "image", src: "https://i.postimg.cc/8PXfJDVv/IMG-20260906-171121-640.jpg"},
    { type: "video", src: "https://streamable.com/e/advtpe"},
    { type: "image", src: "https://i.postimg.cc/7YhfycT4/IMG-20260906-171400-992.jpg"},
    { type: "image", src: "https://i.postimg.cc/pXrpt7nx/IMG-20260906-171544-366.jpg"},
    { type: "video", src: "https://streamable.com/e/ometbr"},
    { type: "video", src: "https://streamable.com/e/n3ic7f"},
    { type: "image", src: "https://i.postimg.cc/ZKnChgvV/IMG-20260906-172212-704.webp"},
    { type: "image", src: "https://i.postimg.cc/kXGBdZRh/IMG-20260906-172318-059.webp"},
    { type: "video", src: "https://streamable.com/e/lmmvj7"},
    { type: "image", src: "https://i.postimg.cc/c4CrNjtF/IMG-20260906-172730-212.webp"},
    { type: "image", src: "https://i.postimg.cc/tCJYHfnr/IMG-20260906-172913-397.webp"},
  ]
};

/****************************************************/
/* PROCESAMIENTO DEL VIAJE */
/****************************************************/
/****************************************************/
/* RENDER DEL VISOR */
/****************************************************/
function mostrarLoaderCroacia() {
  loaderCroacia.style.display = "block";
  viewerCroacia.style.display = "none";
}

function ocultarLoaderCroacia() {
  loaderCroacia.style.display = "none";
}

function cargarImagenCroacia(url) {
  if (!url) {
    viewerCroacia.innerHTML = "";
    viewerCroacia.style.display = "none";
    ocultarLoaderCroacia();
    return;
  }

  mostrarLoaderCroacia();

  const img = new Image();
  pendingImageCroacia = img;

  img.onload = () => {
    // Si mientras cargaba se solicitó otra imagen, cancelamos esta
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "";
    viewerCroacia.appendChild(img);

    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.onerror = () => {
    if (pendingImageCroacia !== img) return;

    viewerCroacia.innerHTML = "<p>Error al cargar la imagen.</p>";
    viewerCroacia.style.display = "block";
    ocultarLoaderCroacia();

    pendingImageCroacia = null;
  };

  img.src = url;
}

function renderMediaCroacia() {
  const media = viajeCroacia.medios[currentMediaCroacia];
  viewerCroacia.innerHTML="";

  /******** IMAGEN ********/
  if(media.type==="image") {
    cargarImagenCroacia(media.src);
  }

  /******** VIDEO ********/
  else if (media.type === "video") {

    ocultarLoaderCroacia();

    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    viewerCroacia.style.display = "block";
    viewerCroacia.appendChild(iframe);
  }

  /******** TEXTO ********/
  else if(media.type==="text") {
    const div=document.createElement("div");
    div.className="viewer-text";
    div.innerHTML=media.content;
    viewerCroacia.appendChild(div);
  }
  /******** CONTADOR ********/
  mediaIndexCroacia.value=currentMediaCroacia+1;
  totalMediaCroacia.textContent = viajeCroacia.medios.length;
}

/****************************************************/
/* SIGUIENTE */
/****************************************************/
nextBtnCroacia.addEventListener("click", () => {
  currentMediaCroacia++;
  if(currentMediaCroacia >= viajeCroacia.medios.length) {
    currentMediaCroacia=0;
  }
  renderMediaCroacia();
});

/****************************************************/
/* ANTERIOR */
/****************************************************/
prevBtnCroacia.addEventListener("click",()=>{
  currentMediaCroacia--;
  if(currentMediaCroacia < 0) {
    currentMediaCroacia = viajeCroacia.medios.length-1;
  }
  renderMediaCroacia();
});

/****************************************************/
/* SALTAR A PÁGINA */
/****************************************************/
mediaIndexCroacia.addEventListener("change", () => {
  const value=Number(mediaIndexCroacia.value);
  if(value>=1 && value<=viajeCroacia.medios.length) {
    currentMediaCroacia=value-1;
    renderMediaCroacia();
  }
});

/****************************************************/
/* TECLADO */
/****************************************************/
document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"){
    nextBtnCroacia.click();
  }
  if(e.key==="ArrowLeft"){
    prevBtnCroacia.click();
  }
});

/****************************************************/
/* INICIO */
/****************************************************/
renderMediaCroacia();