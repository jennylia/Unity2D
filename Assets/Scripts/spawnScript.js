#pragma strict
public var enemy: GameObject;
public var spawnTime:float = 2;

function Start () {

	//call the add enemy function every spwantime seconds
	//Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds.
	InvokeRepeating("addEnemy", spawnTime,spawnTime);
}

function addEnemy(){
	//variables to store the x position of spwawn object
	var x1 = transform.position.x - (renderer.bounds.size.x)/2;
	Debug.Log(transform.ToString());
	Debug.Log(transform.position.x);
	var x2 = transform.position.x + renderer.bounds.size.x/2;
	
	var spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);
	Instantiate(enemy, spawnPoint, Quaternion.identity);

}

function Update () {

	
}