#pragma strict
public var speed:int = -5;
public var destroyTime:int = 1;
public static var score:int = 0;


function Start () {
	
	//adding the speed
	rigidbody2D.velocity.y = speed;
	// letting it twirl
	rigidbody2D.angularVelocity = Random.Range(-200,200);
	
	Destroy(gameObject,destroyTime);
}

function Update () {
	

}

function OnTriggerEnter2D(obj : Collider2D){

	var name = obj.gameObject.name;
	
	
	if (name == "bullet(Clone)"){
		Destroy(gameObject, 0);
		
		Destroy(obj.gameObject, 0);
		score += 10;
		GameMaster.currentScore = score;
		Debug.Log("Enemy Score is : " + score);
		

	}
	
	else if(name == "spaceship"){
		Destroy(gameObject);
		GameMaster.Reset();
	}
	
	Debug.Log("I collided");
}