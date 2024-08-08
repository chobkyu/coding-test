## Linked list Data Structure

A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node. 

For example,

<img src='./public/linked-list-concept.webp>


You have to start somewhere, so we give the address of the first node a special name called HEAD. Also, the last node in the linked list can be identified because its next portion points to NULL.


Linked lists can be of multiple types: singly, doubly, and circular linked list. In this file, I will focus on the singly linked list.


## Representation of Linked List

Let's see how each node of the linked list is represented. Each node consists a data item and an address of another node.

We wrap both the data item and the next node reference in a struct as

```
struct node {
    int data;
    struct node * next;
}
```

Understanding the structure of a linked list node is the key to having a grasp on it.

Each struct node has a data item and a pointer to another struct node. Let us create a simple Linked List with three items to understand how this works/

```
/* Initialize nodes */
struct node *head;
struct node *one = NULL;
struct node *two = NULL;
struct node *three = NULL;

/*Allocate memory*/
one = malloc(sizeof(struct node));
two = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));

/*Assign data values*/
one->data = 1;
two->data = 2;
three->data=3;

/*Connect nodes*/
one->next = two;
two->next = three;
three->next = NULL

/*Save address of first node in head*/
head = one;
```

In just a few steps, we have created a simple linked list with three nodes.


<img src='./public/linked-list-concept.webp>


The power of a linked list comes from the ability to break the chain and rejoin it.

if you wanted to put an element 4 between 1 and 2, the step would be:

- Create a new struct node and allocate memory to it.
- Add its data value as 4
- Point its next pointer to the sturct node containing 2 as the data value
- Change the next pointer of "1" to the node we just created.

Doing something similar in an array would have required shifting the positions of all the subsequent elements.

If the task to be searched is a skill, it is better to use an array, if the task is to add or related tasks, a linked list is recommended.


## Linked List Complexity

Time Complexity

<table>
    <tr>
        <td></td>
        <td>Worst case</td>
        <td>Average Case</td>
    </tr>
    <tr>
        <td>Search</td>
        <td>O(n)</td>
        <td>O(n)</td>
    </tr>
    <tr>
        <td>Insert</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Deletion</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>

</table>

Space Complexity: O(n)


## Linked List Applications

- Dynamic memory allocation
- Implemented in stack and queue
- In undo functionality of softwares
- Hash tables, Graphs


## References
URL : [https://www.programiz.com/dsa/linked-list](https://www.programiz.com/dsa/linked-list)
