## Priority Queue

A priority queue is a special type of queue in which each element is associated with a priority value. And, elements are served on the basis of their priority. That is, higher priority elements are served first.

However, if elements with the same priority occur, they are served according to their order in the queue.

#### Assigning Priority Value

Generally, the value of the element itself is considered for assigning the priority. 

For example, The element with the highest value is considered the highest priority element. However, in other cases, we can assume the element with the lowest value as the highest priority element.

We can also set priorities according to our needs.

<img src='./public/Introduction.webp'/>


### Difference between Priority Queue and Normal Queue

In a queue, the FIFO rule is implemented whereas, in a priority queue, the values are removed on the basis of priority. The element with the highest priority is removed first.



### Implementation of Priority Queue

Priority queue can be implemented using an array, a linked list, a heap data structure, or a binary search tree. Among these data structures, heap data structure provides an efficient implementation of priority queues.

A comparative analysis of different implementations of priority queue is given below

<table>
    <tr>
        <td>Operations</td>
        <td>peek</td>
        <td>insert</td>
        <td>delete</td>
    </tr>
    <tr>
        <td>Linked List</td>
        <td>O(1)</td>
        <td>O(n)</td>
        <td>O(1)</td>
    </tr>
     <tr>
        <td>Binary Heap</td>
        <td>O(1)</td>
        <td>O(log n)</td>// export default로 Mutation 내용 내보내기
const moduleMutation_S0101_KCD_FACTORY_EDT_KCD_FACTORY = {
  Mutation: {

    mgrInsert_S0101_KCD_FACTORY_EDT_KCD_FACTORY: async (_, args, contextValue) => {
      // 


      var tRetDate = getTime();

      // let tPO = "POA2022S672";

      var tUserInfo = AFLib.getUserInfo(contextValue);
 
      var tSQL = 'select (max(substring(FACTORY_CD, 3, 3)) + 1) as max1 from KCD_FACTORY';
      var nRet0 = await prisma.$queryRaw(Prisma.raw(tSQL));
      var tRet1 = nRet0[0];
      var tMaxSeq = tRet1.max1;

      var retArray = [];
      var tIdx = 0;
      for (tIdx = 0; tIdx < args.datas.length; tIdx++) {
        var tData = args.datas[tIdx];
        var tObjEDT_KCD_FACTORY = { ...tData };

        delete tObjEDT_KCD_FACTORY.id;
        delete tObjEDT_KCD_FACTORY.BANK_NAME;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NO;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NAME;

        tObjEDT_KCD_FACTORY.FACTORY_CD = 'FC' + tMaxSeq;
        tObjEDT_KCD_FACTORY.REG_USER = tUserInfo.USER_ID;
        tObjEDT_KCD_FACTORY.REG_DATETIME = tRetDate;
        tObjEDT_KCD_FACTORY.UPD_USER = tUserInfo.USER_ID;
        tObjEDT_KCD_FACTORY.UPD_DATETIME = tRetDate;
        tObjEDT_KCD_FACTORY.STATUS_CD = '0';
        tObjEDT_KCD_FACTORY.tag_po = 'P';
        tObjEDT_KCD_FACTORY.tag_order = '-';

        // let retInsert = await prisma.KCD_FACTORY.create({data:tObjEDT_KCD_FACTORY});



      }

      try {
        let sqlStr = `
        INSERT INTO KCD_FACTORY (FACTORY_CD, FACTORY_NAME, USER_NAME, EMAIL, TEL_NO, FAX_NO, ZIP_NO, ADDR1, ADDR2, PORT, AIRPORT, NAT_CD, BANK_CD, STATUS_CD, REG_USER, REG_DATETIME, UPD_USER, UPD_DATETIME,tag_po,tag_order)
        VALUES (
          '${tObjEDT_KCD_FACTORY.FACTORY_CD}',
          '${tObjEDT_KCD_FACTORY.FACTORY_NAME}',
          '${tObjEDT_KCD_FACTORY.USER_NAME}',
          '${tObjEDT_KCD_FACTORY.EMAIL}',
          '${tObjEDT_KCD_FACTORY.TEL_NO}',
          '${tObjEDT_KCD_FACTORY.FAX_NO}',
          '${tObjEDT_KCD_FACTORY.ZIP_NO}',
          '${tObjEDT_KCD_FACTORY.ADDR1}',
          '${tObjEDT_KCD_FACTORY.ADDR2}',
          '${tObjEDT_KCD_FACTORY.PORT}',
          '${tObjEDT_KCD_FACTORY.AIRPORT}',
          '${tObjEDT_KCD_FACTORY.NAT_CD}',
          '${tObjEDT_KCD_FACTORY.BANK_CD}',
          '${tObjEDT_KCD_FACTORY.STATUS_CD}',
          '${tObjEDT_KCD_FACTORY.REG_USER}',
          '${tObjEDT_KCD_FACTORY.REG_DATETIME}',
          '${tObjEDT_KCD_FACTORY.UPD_USER}',
          '${tObjEDT_KCD_FACTORY.UPD_DATETIME}',
          '${tObjEDT_KCD_FACTORY.tag_po}',
          '${tObjEDT_KCD_FACTORY.tag_order}'
        )
      `
        let retInsert = await prisma.$queryRaw(Prisma.raw(sqlStr));

        if (typeof retInsert.id === 'undefined') {
          var tObj = {};
          tObj.CODE = 'ERROR';
          tObj.id = -1;
          retArray.push(tObj);
        } else {
          var tObj = {};
          tObj.CODE = retInsert.FACTORY_CD;
          tObj.id = retInsert.id;
          retArray.push(tObj);
        }
        return (retArray);

      } catch (e) {
        console.log(e);
        return e;
      }
    },
// export default로 Mutation 내용 내보내기
const moduleMutation_S0101_KCD_FACTORY_EDT_KCD_FACTORY = {
  Mutation: {

    mgrInsert_S0101_KCD_FACTORY_EDT_KCD_FACTORY: async (_, args, contextValue) => {
      // 


      var tRetDate = getTime();

      // let tPO = "POA2022S672";

      var tUserInfo = AFLib.getUserInfo(contextValue);
 
      var tSQL = 'select (max(substring(FACTORY_CD, 3, 3)) + 1) as max1 from KCD_FACTORY';
      var nRet0 = await prisma.$queryRaw(Prisma.raw(tSQL));
      var tRet1 = nRet0[0];
      var tMaxSeq = tRet1.max1;

      var retArray = [];
      var tIdx = 0;
      for (tIdx = 0; tIdx < args.datas.length; tIdx++) {
        var tData = args.datas[tIdx];
        var tObjEDT_KCD_FACTORY = { ...tData };

        delete tObjEDT_KCD_FACTORY.id;
        delete tObjEDT_KCD_FACTORY.BANK_NAME;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NO;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NAME;

        tObjEDT_KCD_FACTORY.FACTORY_CD = 'FC' + tMaxSeq;
        tObjEDT_KCD_FACTORY.REG_USER = tUserInfo.USER_ID;
        tObjEDT_KCD_FACTORY.REG_DATETIME = tRetDate;
        tObjEDT_KCD_FACTORY.UPD_USER = tUserInfo.USER_ID;
        tObjEDT_KCD_FACTORY.UPD_DATETIME = tRetDate;
        tObjEDT_KCD_FACTORY.STATUS_CD = '0';
        tObjEDT_KCD_FACTORY.tag_po = 'P';
        tObjEDT_KCD_FACTORY.tag_order = '-';

        // let retInsert = await prisma.KCD_FACTORY.create({data:tObjEDT_KCD_FACTORY});



      }

      try {
        let sqlStr = `
        INSERT INTO KCD_FACTORY (FACTORY_CD, FACTORY_NAME, USER_NAME, EMAIL, TEL_NO, FAX_NO, ZIP_NO, ADDR1, ADDR2, PORT, AIRPORT, NAT_CD, BANK_CD, STATUS_CD, REG_USER, REG_DATETIME, UPD_USER, UPD_DATETIME,tag_po,tag_order)
        VALUES (
          '${tObjEDT_KCD_FACTORY.FACTORY_CD}',
          '${tObjEDT_KCD_FACTORY.FACTORY_NAME}',
          '${tObjEDT_KCD_FACTORY.USER_NAME}',
          '${tObjEDT_KCD_FACTORY.EMAIL}',
          '${tObjEDT_KCD_FACTORY.TEL_NO}',
          '${tObjEDT_KCD_FACTORY.FAX_NO}',
          '${tObjEDT_KCD_FACTORY.ZIP_NO}',
          '${tObjEDT_KCD_FACTORY.ADDR1}',
          '${tObjEDT_KCD_FACTORY.ADDR2}',
          '${tObjEDT_KCD_FACTORY.PORT}',
          '${tObjEDT_KCD_FACTORY.AIRPORT}',
          '${tObjEDT_KCD_FACTORY.NAT_CD}',
          '${tObjEDT_KCD_FACTORY.BANK_CD}',
          '${tObjEDT_KCD_FACTORY.STATUS_CD}',
          '${tObjEDT_KCD_FACTORY.REG_USER}',
          '${tObjEDT_KCD_FACTORY.REG_DATETIME}',
          '${tObjEDT_KCD_FACTORY.UPD_USER}',
          '${tObjEDT_KCD_FACTORY.UPD_DATETIME}',
          '${tObjEDT_KCD_FACTORY.tag_po}',
          '${tObjEDT_KCD_FACTORY.tag_order}'
        )
      `
        let retInsert = await prisma.$queryRaw(Prisma.raw(sqlStr));

        if (typeof retInsert.id === 'undefined') {
          var tObj = {};
          tObj.CODE = 'ERROR';
          tObj.id = -1;
          retArray.push(tObj);
        } else {
          var tObj = {};
          tObj.CODE = retInsert.FACTORY_CD;
          tObj.id = retInsert.id;
          retArray.push(tObj);
        }
        return (retArray);

      } catch (e) {
        console.log(e);
        return e;
      }
    },
const moduleMutation_S0101_KCD_FACTORY_EDT_KCD_FACTORY = {
  Mutation: {
    mgrInsert_S0101_KCD_FACTORY_EDT_KCD_FACTORY: async (_, args, contextValue) => {
      const tRetDate = getTime();
      const tUserInfo = AFLib.getUserInfo(contextValue);

      const tSQL = 'SELECT (MAX(SUBSTRING(FACTORY_CD, 3, 3)) + 1) AS max1 FROM KCD_FACTORY';
      const nRet0 = await prisma.$queryRaw(Prisma.raw(tSQL));
      const tMaxSeq = nRet0[0]?.max1 || 1;

      const retArray = [];

      for (const tData of args.datas) {
        const tObjEDT_KCD_FACTORY = {
          ...tData,
          FACTORY_CD: `FC${tMaxSeq}`,
          REG_USER: tUserInfo.USER_ID,
          REG_DATETIME: tRetDate,
          UPD_USER: tUserInfo.USER_ID,
          UPD_DATETIME: tRetDate,
          STATUS_CD: '0',
          tag_po: 'P',
          tag_order: '-'
        };

        delete tObjEDT_KCD_FACTORY.id;
        delete tObjEDT_KCD_FACTORY.BANK_NAME;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NO;
        delete tObjEDT_KCD_FACTORY.ACCOUNT_NAME;

        try {
          const sqlStr = `
            INSERT INTO KCD_FACTORY (
              FACTORY_CD, FACTORY_NAME, USER_NAME, EMAIL, TEL_NO, FAX_NO, ZIP_NO, ADDR1, ADDR2, PORT, AIRPORT, NAT_CD, BANK_CD, STATUS_CD, REG_USER, REG_DATETIME, UPD_USER, UPD_DATETIME, tag_po, tag_order
            ) VALUES (
              '${tObjEDT_KCD_FACTORY.FACTORY_CD}',
              '${tObjEDT_KCD_FACTORY.FACTORY_NAME}',
              '${tObjEDT_KCD_FACTORY.USER_NAME}',
              '${tObjEDT_KCD_FACTORY.EMAIL}',
              '${tObjEDT_KCD_FACTORY.TEL_NO}',
              '${tObjEDT_KCD_FACTORY.FAX_NO}',
              '${tObjEDT_KCD_FACTORY.ZIP_NO}',
              '${tObjEDT_KCD_FACTORY.ADDR1}',
              '${tObjEDT_KCD_FACTORY.ADDR2}',
              '${tObjEDT_KCD_FACTORY.PORT}',
              '${tObjEDT_KCD_FACTORY.AIRPORT}',
              '${tObjEDT_KCD_FACTORY.NAT_CD}',
              '${tObjEDT_KCD_FACTORY.BANK_CD}',
              '${tObjEDT_KCD_FACTORY.STATUS_CD}',
              '${tObjEDT_KCD_FACTORY.REG_USER}',
              '${tObjEDT_KCD_FACTORY.REG_DATETIME}',
              '${tObjEDT_KCD_FACTORY.UPD_USER}',
              '${tObjEDT_KCD_FACTORY.UPD_DATETIME}',
              '${tObjEDT_KCD_FACTORY.tag_po}',
              '${tObjEDT_KCD_FACTORY.tag_order}'
            )
          `;
          const retInsert = await prisma.$queryRaw(Prisma.raw(sqlStr));

          const tObj = {
            CODE: retInsert?.FACTORY_CD || 'ERROR',
            id: retInsert?.id || -1
          };
          retArray.push(tObj);
        } catch (e) {
          console.error(e);
          return e;
        }
      }

      return retArray;
    }
  }
};

export default moduleMutation_S0101_KCD_FACTORY_EDT_KCD_FACTORY;

        <td>O(log n)</td>
    </tr>
     <tr>
        <td>Binary Search Tree</td>
        <td>O(1)</td>
        <td>O(log n)</td>
        <td>O(log n)/td>
    </tr>
</table>

### Priority Queue Operations

Basis operations of a priority queue are inserting, removing, and peeking elements.


#### Inserting an Element into the Priority Queue

Inserting an element into a priority queue (max-heap) is don by the following steps.

- Insert the new element at the end of the tree.

<img src='./public/insert-1_0.webp'/>


- Heapify the tree.

<img src='./public/insert-2_0.webp'/>


<!-- Algorithm for insertion of an element into priority queue (max-heap) -->


#### Deleting an Element from the Priority Queue

Deleting an element from a priority queue (max-heap) is done as follows.

- Select the element to be deleted.

<img src='./public/delete-1_0.webp'/>


- Swap it with the last element.

<img src='./public/delete-2_0.webp'/>


- Remove the last element

<img src='./public/delete-3.webp'/>


- Heapify the tree

<img src='./public/delete-4.webp'/>


#### Peeking from the Priority Queue (Find max/min)

Peek operation returns the maximum element from Max Heap or minimum element from Min Heap without deleting the node.

For both Max heap and Min heap - return rootNode.



### Priority Queue Applications

Some of the applications of a priority queue are:

- Dijkstra's algorithm
- for implementing stack
- for load balancing and interrut handling in an operating system
- for data compression in Huffman code.


## References
URL : [https://www.programiz.com/dsa/priority-queue](https://www.programiz.com/dsa/priority-queue)
