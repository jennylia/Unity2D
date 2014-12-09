#pragma strict

public var bullet: GameObject;

function Start () {

}

//~60 times
function Update () {
//Get axis returns a value between 1 and -1 based on the key pressed
//change the space ship velocity by getaxis("Horizontal") * 10
//ctrl + ' to look up api
	rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;
	
	if(Input.GetKeyDown("space")){
	//create a new buttlet
		Instantiate(bullet, transform.position,Quaternion.identity);
	}
	
	


}

