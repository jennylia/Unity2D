

public var speed : int = 6;

function Start () {

	rigidbody2D.velocity.y = speed;

}

function OnBecameInvisible(){
	Destroy(gameObject);
}

function Update () {
 	
}