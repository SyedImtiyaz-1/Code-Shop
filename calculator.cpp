#include<iostream>
using namespace std;
void  add(int a, int b)
{
    cout<< a+b;
}
void sub(int a , int b)
{
    cout<< a-b;

}
void mul(int a, int b)
{
    cout<<a*b;
}
void divide(int a ,int b)
{
    cout<< a/b;
}
void modulo(int a ,int b)
{
    cout<<a%b;
    }
main()
{
    int op,a,b;
    int i;
    cout<<"2 NUMBER CALCULATOR";
    cout<<"---option 1---ADD"<<endl;
     cout<<"---option 2---SUB"<<endl;
      cout<<"---option 3---MUL"<<endl;
       cout<<"---option 4---DIVIDE"<<endl;
        cout<<"---option 5---MODULO"<<endl;
        cout<<"enter first number";
        cin>>a;
        cout<<"enter second number";
        cin>>b;
        cout<<"ENTER YOUR OPTION"<<endl;
        cin>>op;
        switch (op)
        {
        case 1:add(a,b)/* constant-expression */;
            /* code */
            break;
            case 2:sub(a,b);
            break;
            case 3:mul(a,b);
            break;
            case 4: divide(a,b);
            break;
            case 5:modulo(a,b);
            break;
        
        default: cout<<"enter valid option";
            break;
        }
}