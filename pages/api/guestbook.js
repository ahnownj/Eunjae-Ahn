// import fs from 'fs/promises';
// import path from 'path';

// const dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');

// // 데이터 디렉토리 생성 (없으면)
// const ensureDataDirectoryExists = async () => {
//   try {
//     await fs.access(path.dirname(dataFilePath));
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
//     } else {
//       throw error;
//     }
//   }
// };

// // 데이터 읽기
// const readGuestbookData = async () => {
//   await ensureDataDirectoryExists();
//   try {
//     const fileContent = await fs.readFile(dataFilePath, 'utf-8');
//     return JSON.parse(fileContent);
//   } catch (error) {
//     // 파일이 없거나 비어있으면 빈 배열 반환
//     if (error.code === 'ENOENT') {
//       return [];
//     }
//     throw error;
//   }
// };

// // 데이터 쓰기
// const writeGuestbookData = async (data) => {
//   await ensureDataDirectoryExists();
//   await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
// };

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const entries = await readGuestbookData();
//       res.status(200).json(entries);
//     } catch (error) {
//       console.error('Error reading guestbook data:', error);
//       res.status(500).json({ message: '데이터를 불러오는 중 오류가 발생했습니다.' });
//     }
//   } else if (req.method === 'POST') {
//     try {
//       const { text, x, y } = req.body;
      
//       if (!text || typeof text !== 'string' || text.trim().length === 0) {
//         return res.status(400).json({ message: '메시지를 입력해주세요.' });
//       }
//       if (typeof x !== 'number' || typeof y !== 'number') {
//           return res.status(400).json({ message: '좌표 정보가 유효하지 않습니다.' });
//       }

//       const entries = await readGuestbookData();
//       const newEntry = {
//         id: Date.now(),
//         text: text.trim(),
//         createdAt: new Date().toISOString(),
//         x: x,
//         y: y
//       };
//       entries.push(newEntry);
//       await writeGuestbookData(entries);

//       res.status(201).json(newEntry);
//     } catch (error) {
//       console.error('Error writing guestbook data:', error);
//       res.status(500).json({ message: '데이터를 저장하는 중 오류가 발생했습니다.' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// } 