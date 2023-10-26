#include<iostream>
using namespace std;
main()
{
    int i,j,n;
    cout<<"enter the range";
    cin>>n;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            cout<<" ";

        }
        for(j=0;j<i+1;j++)
        {
        cout<<"* ";
    }
    cout<<endl;
    }
}